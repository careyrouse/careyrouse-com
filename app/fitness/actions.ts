"use server";

import { resend } from "@/lib/resend";

export async function sendApplicationNotification(data: {
    firstName: string;
    lastName: string;
    email: string;
    cityZip: string;
    equipment: string;
    experience: string;
    reason: string;
    understandPricing: boolean;
}) {
    const fromEmail = process.env.RESEND_FROM_EMAIL;

    if (!fromEmail) {
        console.error("RESEND_FROM_EMAIL not configured");
        return { success: false, error: "Configuration error" };
    }

    try {
        const response = await resend.emails.send({
            from: fromEmail,
            to: "carey@careyrouse.com", // Sending to your actual email mailbox
            subject: `${data.firstName} ${data.lastName} has applied for a fitness assessment`,
            html: `
                <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
                    <h2 style="color: #000;">New Fitness Application Received</h2>
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    
                    <p><strong>First Name:</strong> ${data.firstName}</p>
                    <p><strong>Last Name:</strong> ${data.lastName}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>City and Zip:</strong> ${data.cityZip}</p>
                    
                    <div style="margin-top: 20px;">
                        <p><strong>Gym/Cardio Access:</strong></p>
                        <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${data.equipment}</p>
                    </div>

                    <div style="margin-top: 20px;">
                        <p><strong>Training & Nutrition Experience:</strong></p>
                        <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${data.experience}</p>
                    </div>

                    <div style="margin-top: 20px;">
                        <p><strong>Reason for Interest:</strong></p>
                        <p style="background: #f9f9f9; padding: 15px; border-radius: 8px;">${data.reason}</p>
                    </div>

                    <p><strong>Acknowledged Pricing:</strong> ${data.understandPricing ? "Yes" : "No"}</p>
                    
                    <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
                    
                    <p style="font-size: 0.9em; color: #666; font-style: italic;">
                        Note: User submitted an application online but might still need to confirm their email.
                    </p>
                </div>
            `,
        });

        return { success: true };
    } catch (error) {
        console.error("Failed to send application notification:", error);
        return { success: false, error: "Failed to send notification" };
    }
}
