import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface FormData {
  businessName: string;
  name: string;
  phone: string;
  message: string;
}

export async function GET() {
  console.log("GET 요청");
  return NextResponse.json({ message: "Hello World" });
}

export async function POST(req: Request) {
  console.log("POST 요청");
  const body = (await req.json()) as FormData;
  const { businessName, name, phone, message } = body;

  // Nodemailer 설정
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  try {
    // 이메일 내용 작성
    const emailContent = `
      <!DOCTYPE html>
      <html>
        <head></head>
        <body style="font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1>문의 메일</h1>
          </div>
          <div style="background: #fff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 0 0 8px 8px;">
            <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 4px;">
              <span style="font-weight: bold; color: #2d6a4f; margin-right: 10px;">병원명:</span> ${businessName}
            </div>
            <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 4px;">
              <span style="font-weight: bold; color: #2d6a4f; margin-right: 10px;">성함:</span> ${name}
            </div>
            <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-radius: 4px;">
              <span style="font-weight: bold; color: #2d6a4f; margin-right: 10px;">연락처:</span> ${phone}
            </div>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 4px; margin-top: 20px;">
              <span style="font-weight: bold; color: #2d6a4f; margin-right: 10px;">문의 내용:</span>
              <p>${message}</p>
            </div>
          </div>
          <div style="text-align: center; margin-top: 20px; color: #666; font-size: 0.9em;">
            <p>© 2025 AUBE. All rights reserved.</p>
          </div>
        </body>
      </html>
    `;

    // 이메일 발송
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: "ckdwns9121@naver.com",
      subject: `[문의] ${businessName} - ${name}님의 문의`,
      html: emailContent,
    });

    return NextResponse.json({ success: true, message: "문의가 성공적으로 접수되었습니다!" });
  } catch (error) {
    console.error("이메일 전송 오류:", error);
    if (error instanceof Error) {
      console.error("에러 메시지:", error.message);
      console.error("에러 스택:", error.stack);
    }
    return NextResponse.json(
      {
        success: false,
        message: "이메일 전송 중 오류가 발생했습니다.",
        error: error instanceof Error ? error.message : "알 수 없는 오류",
      },
      { status: 500 }
    );
  }
}
