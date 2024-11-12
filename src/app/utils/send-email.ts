import { FormData } from "../components/Contact";

export async function sendEmail(data: FormData): Promise<SendEmailResponse> {
  try {
    const apiEndpoint = "/api/email";

    const response = await fetch(apiEndpoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(
        `HTTP error! status: ${response.status}, ${response.json()}`,
      );
    }

    return { status: "successful" };
  } catch (err) {
    return {
      status: "error",
      message: err instanceof Error ? err.message : "An unknown error occurred",
    };
  }
}

type SendEmailResponse =
  | { status: "successful" }
  | { status: "error"; message: string };
