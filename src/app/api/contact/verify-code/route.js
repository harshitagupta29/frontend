export async function POST(req) {
  const { otp } = await req.json();

  if (parseInt(otp) === global.generatedOTP) {
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } else {
    return new Response(JSON.stringify({ success: false }), {
      status: 401,
    });
  }
}
