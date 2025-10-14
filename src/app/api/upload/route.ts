import { NextRequest, NextResponse } from "next/server";
import { Storage } from "@google-cloud/storage";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("image") as File;

  if (!file) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Initialize Google Cloud Storage
  const storage = new Storage({
        credentials: JSON.parse(process.env.SERVICE_ACCOUNT!),
        projectId: 'wolf-476978',
  });

  const bucket = storage.bucket(process.env.GCS_BUCKET_NAME!);

  // Use same filename pattern
  const filename = `${Date.now()}-${file.name}`;
  const blob = bucket.file(filename);

  // Upload file to GCS
  await blob.save(buffer, {
    resumable: false,
    contentType: file.type,
  });

  // Make the file publicly accessible
  await blob.makePublic();

  // Return same structure as before
  const filePath = `/uploads/${filename}`;
  const publicUrl = `https://storage.googleapis.com/${bucket.name}/${filename}`;

  // NOTE:
  // You can continue to use `filePath` in your UI unchanged.
  // If needed, use the publicUrl internally for actual access.
  return NextResponse.json({ filePath, publicUrl });
}
