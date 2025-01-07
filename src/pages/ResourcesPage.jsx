"use client";

import React, { useState } from "react";
import styled from "styled-components";
import {
  Download,
  FileText,
  Book,
  Terminal,
  BarChart2,
  Box,
  Shield,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { supabase } from "../lib/supabaseClient";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  padding-top: calc(72px + 2rem);
`;

const Header = styled.div`
  margin-bottom: 3rem;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.lightText};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 3rem;
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: ${(props) => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ResourceCard = styled.div`
  background: ${(props) => props.theme.colors.white};
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => `${props.theme.colors.secondary}15`};
  color: ${(props) => props.theme.colors.secondary};
  flex-shrink: 0;
`;

const CategoryBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  background: ${(props) => `${props.theme.colors.primary}10`};
  color: ${(props) => props.theme.colors.primary};
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 500;
`;

const DownloadCount = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.lightText};
  font-size: 0.875rem;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const ResourceTitle = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const ResourceDescription = styled.p`
  color: ${(props) => props.theme.colors.lightText};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ResourceMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FileSize = styled.span`
  color: ${(props) => props.theme.colors.lightText};
  font-size: 0.875rem;
`;

const DownloadButton = styled.button`
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.primary},
    ${(props) => props.theme.colors.secondary}
  );
  color: charcoal;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: opacity 0.3s ease;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid ${(props) => `${props.theme.colors.primary}20`};
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
`;

const DialogOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
`;

const DialogWrapper = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const DialogHeaderStyled = styled.div`
  margin-bottom: 2rem;
`;

const DialogTitleStyled = styled.h2`
  color: ${(props) => props.theme.colors.primary};
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const DialogDescriptionStyled = styled.p`
  color: ${(props) => props.theme.colors.lightText};
  font-size: 1rem;
  line-height: 1.5;
`;

const ResourcesPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [selectedResource, setSelectedResource] = useState(null);
  const [loading, setLoading] = useState(false);

  const resources = [
    {
      id: 1,
      title: "Supply Chain Analytics Suite",
      description:
        "Advanced N8N workflows and custom scripts for end-to-end supply chain analytics",
      type: "workflow",
      icon: BarChart2,
      fileSize: "3.2 MB",
      category: "Analytics",
      downloads: "2.3k",
    },
    {
      id: 2,
      title: "Inventory Forecasting Model",
      description:
        "ML-powered Jupyter notebook for accurate inventory predictions",
      type: "notebook",
      icon: Book,
      fileSize: "2.8 MB",
      category: "Machine Learning",
      downloads: "1.8k",
    },
    {
      id: 3,
      title: "Logistics Optimization Agent",
      description:
        "AI agent for real-time route optimization and delivery scheduling",
      type: "agent",
      icon: Box,
      fileSize: "4.1 MB",
      category: "Automation",
      downloads: "956",
    },
    {
      id: 4,
      title: "Risk Assessment Framework",
      description:
        "Comprehensive toolkit for supply chain risk evaluation and mitigation",
      type: "framework",
      icon: Shield,
      fileSize: "2.5 MB",
      category: "Risk Management",
      downloads: "1.2k",
    },
    {
      id: 5,
      title: "Advanced Framework for Deep Research and Analysis",
      description:
        "Comprehensive guide for conducting deep Researech using perplecity & NotebookLM",
      type: "framework",
      icon: Shield,
      fileSize: "0.2 MB",
      category: "Research Framework",
      downloads: "50+",
    },
  ];

  const getResourcePath = (resourceId) => {
    console.log("Getting resource path for ID:", resourceId);

    if (!resourceId) {
      throw new Error("Resource ID is undefined");
    }

    const paths = {
      1: {
        bucket: "sc_respurces",
        path: "n8n_templates/Customer_Support_Email_Agent.json",
      },
      2: {
        bucket: "sc_respurces",
        path: "n8n_templates/PDF_Pinecone.json",
      },
      3: {
        bucket: "sc_respurces",
        path: "agents/logistics_optimization.zip",
      },
      4: {
        bucket: "sc_respurces",
        path: "frameworks/risk_assessment.pdf",
      },
      5: {
        bucket: "sc_respurces",
        path: "Frameworks/Deep_Research.pdf",
      },
    };

    const resourcePath = paths[resourceId];

    if (!resourcePath) {
      throw new Error(`No path defined for resource ID: ${resourceId}`);
    }

    console.log("Found resource path:", resourcePath);
    return resourcePath;
  };

  // Update the handleSubmit function:
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log("Step 1: Starting form submission");

      // 1. Store user details in database
      console.log("Step 2: Storing user details...", {
        formData,
        resourceId: selectedResource?.id,
      });

      const { data: user, error: userError } = await supabase
        .from("sc_resource_downloads")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            resource_id: selectedResource.id,
            downloaded_at: new Date().toISOString(),
          },
        ]);

      if (userError) {
        console.error("Database Error:", userError);
        throw new Error(`Database Error: ${userError.message}`);
      }

      console.log("Step 3: User details stored successfully");

      // 2. Get file path
      console.log("Step 4: Getting resource path for ID:", selectedResource.id);
      const resourcePath = getResourcePath(selectedResource.id);
      console.log("Resource Path:", resourcePath);

      // 3. Generate signed URL
      console.log("Step 5: Generating signed URL...");
      const { data: fileData, error: fileError } = await supabase.storage
        .from(resourcePath.bucket)
        .createSignedUrl(resourcePath.path, 3600);

      if (fileError) {
        console.error("Storage Error:", fileError);
        throw new Error(`Storage Error: ${fileError.message}`);
      }

      if (!fileData?.signedUrl) {
        console.error("No signed URL generated");
        throw new Error("Failed to generate download URL");
      }

      console.log("Step 6: Signed URL generated successfully");

      // 4. Call n8n webhook
      console.log("Step 7: Calling n8n webhook...");
      const webhookData = {
        downloadUrl: fileData.signedUrl,
        userName: formData.name,
        userEmail: formData.email,
        resourceName: selectedResource.title,
        fileType: resourcePath.path.split(".").pop(),
      };
      console.log("Webhook payload:", webhookData);

      const webhookResponse = await fetch(
        "https://mahakaal.app.n8n.cloud/webhook/0fc47d71-d36b-4bff-ac5f-a9b1d79dd186",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(webhookData),
        }
      );

      const webhookResponseData = await webhookResponse.text();
      console.log("Webhook response:", webhookResponseData);

      if (!webhookResponse.ok) {
        console.error("Webhook Error:", {
          status: webhookResponse.status,
          statusText: webhookResponse.statusText,
          response: webhookResponseData,
        });
        throw new Error(`Webhook Error: ${webhookResponse.statusText}`);
      }

      console.log("Step 8: Webhook called successfully");

      // Success
      console.log("Step 9: All steps completed successfully");
      alert("Check your email for the download link!");
      setSelectedResource(null);
      setFormData({ name: "", email: "", company: "" });
    } catch (error) {
      console.error("Detailed Error:", {
        message: error.message,
        error: error,
      });

      // Provide more specific error messages to the user
      let errorMessage = "Error processing your request. ";
      if (error.message.includes("Database Error")) {
        errorMessage += "Failed to save your information. ";
      } else if (error.message.includes("Storage Error")) {
        errorMessage += "Failed to generate download link. ";
      } else if (error.message.includes("Webhook Error")) {
        errorMessage += "Failed to send email. ";
      }
      errorMessage += "Please try again.";

      alert(errorMessage);
    } finally {
      setLoading(false);
      console.log("Step 10: Request completed");
    }
  };

  return (
    <PageContainer>
      <Header>
        <Description>
          Access our curated collection of professional tools, workflows, and
          resources designed to transform your supply chain operations
        </Description>
      </Header>

      <ResourcesGrid>
        {resources.map((resource) => (
          <ResourceCard key={resource.id}>
            <CardHeader>
              <IconWrapper>
                <resource.icon />
              </IconWrapper>
              <div>
                <CategoryBadge>{resource.category}</CategoryBadge>
                <DownloadCount>
                  <Download />
                  {resource.downloads}
                </DownloadCount>
              </div>
            </CardHeader>

            <ResourceTitle>{resource.title}</ResourceTitle>
            <ResourceDescription>{resource.description}</ResourceDescription>

            <ResourceMeta>
              <FileSize>{resource.fileSize}</FileSize>
              <DownloadButton onClick={() => setSelectedResource(resource)}>
                <Download /> Download Now
              </DownloadButton>
            </ResourceMeta>
          </ResourceCard>
        ))}
      </ResourcesGrid>

      {/* Add this at the bottom of the return statement, just before the closing PageContainer */}
      {selectedResource && (
        <DialogOverlay onClick={() => setSelectedResource(null)}>
          <DialogWrapper onClick={(e) => e.stopPropagation()}>
            <DialogHeaderStyled>
              <DialogTitleStyled>
                Download {selectedResource.title}
              </DialogTitleStyled>
              <DialogDescriptionStyled>
                Enter your details to receive the download link via email
              </DialogDescriptionStyled>
            </DialogHeaderStyled>

            <form onSubmit={handleSubmit}>
              <FormLabel htmlFor="name">Full Name</FormLabel>
              <FormInput
                id="name"
                required
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />

              <FormLabel htmlFor="email">Business Email</FormLabel>
              <FormInput
                id="email"
                type="email"
                required
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />

              <FormLabel htmlFor="company">Company Name (Optional)</FormLabel>
              <FormInput
                id="company"
                placeholder="Acme Inc."
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />

              <DownloadButton type="submit" disabled={loading}>
                {loading ? "Processing..." : "Get Download Link"}
              </DownloadButton>
            </form>
          </DialogWrapper>
        </DialogOverlay>
      )}
    </PageContainer>
  );
};

export default ResourcesPage;
