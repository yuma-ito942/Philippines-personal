import { NextResponse } from "next/server";
import { chatConfig, siteConfig } from "@/data/content";

function getAutoReply(message: string): string {
  const text = message.toLowerCase();

  if (
    text.includes("available") ||
    text.includes("availability") ||
    text.includes("hire")
  ) {
    return "I'm currently taking on select projects this quarter. Share a bit about your timeline and scope, and I'll let you know if it's a good fit!";
  }

  if (
    text.includes("rate") ||
    text.includes("price") ||
    text.includes("cost") ||
    text.includes("budget") ||
    text.includes("timeline")
  ) {
    return "Rates depend on scope and engagement type. Most projects start with a discovery call — typically 2–8 week engagements for focused deliverables. Happy to discuss specifics!";
  }

  if (
    text.includes("project") ||
    text.includes("build") ||
    text.includes("app") ||
    text.includes("website") ||
    text.includes("discuss")
  ) {
    return "I'd love to hear more about your project. What's the main goal, and do you have a target launch date in mind?";
  }

  if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
    return "Hey! Great to meet you. What brings you here today — a new project, consulting, or something else?";
  }

  return `${chatConfig.defaultReply} You can reach me at ${siteConfig.email}.`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!message || message.length > 2000) {
      return NextResponse.json(
        { error: "Invalid message" },
        { status: 400 },
      );
    }

    const reply = getAutoReply(message);

    return NextResponse.json({
      success: true,
      reply,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 },
    );
  }
}
