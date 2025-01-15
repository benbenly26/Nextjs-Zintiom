
import ContactModel from "../../../../models/contactModel";
import connectMoongo from "../../../../utils/connectMongo";

export async function POST(req) {
  try {
    // Parse the request body
    const { name, phone, email, message } = await req.json();
    const contact = { name, phone, email, message };

    // Connect to the database
    await connectMoongo();

    // Check if the email already exists
    const existingUser = await ContactModel.findOne({ email });
    if (existingUser) {
      return new Response(
        JSON.stringify({
          success: false,
          msg: "Already review submitted",
          email: existingUser.email,
        }),
        { status: 422 }
      );
    }

    // Create a new contact
    await ContactModel.create(contact);
    return new Response(
      JSON.stringify({
        success: true,
        msg: "Message has been sent Successfully",
      }),
      { status: 200 }
    );
  } catch (e) {
    return new Response(
      JSON.stringify({
        success: false,
        error: e.message,
      }),
      { status: 500 }
    );
  }
}
