import { error } from "@sveltejs/kit";
import { put } from "@vercel/blob";

export function load({ setHeaders }) {
  setHeaders({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  })
}

export const actions = {
  upload: async ({ request }) => {
    const form = await request.formData();
    const file = form.get("file") as File;

    if (!file) {
      throw error(400, { message: "No file to upload." });
    }

    const { url } = await put(file.name, file, { access: "public" });
    return { uploaded: url };
  },
};