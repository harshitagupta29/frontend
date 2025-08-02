// export async function POST(req) {
//   const body = await req.json();
//   console.log("Request body:", body);
//   const { code } = body;

//   console.log("Received code:", code, "Expected OTP:", global.generatedOTP);

//   if ((code + '').trim() === (global.generatedOTP + '').trim()) {
//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } else {
//     return new Response(JSON.stringify({ success: false }), { status: 401 });
//   }
// }
export async function POST(req) {
  const { code, originalOtp } = await req.json();

  console.log("Entered code:", code, "Expected:", originalOtp);

  if ((code + '').trim() === (originalOtp + '').trim()) {
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } else {
    return new Response(JSON.stringify({ success: false }), { status: 401 });
  }
}
