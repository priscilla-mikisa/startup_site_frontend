import { NextRequest } from 'next/server';

// type ResponseData = {
//   success: boolean;
//   message: string;
//   data?: any;
// }

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body
    const formData = await request.json();
    
    // Log the form submission
    console.log('Received form submission:', formData);
    
    // Return successful response
    return new Response(JSON.stringify({
      success: true,
      message: 'Startup information submitted successfully!',
      data: { submissionId: 'mock-id-' + Date.now() }
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error processing submission:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'An error occurred while processing your submission.'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

// You can add this to handle other methods
export async function GET() {
  return new Response(JSON.stringify({
    success: false,
    message: 'Method not allowed'
  }), {
    status: 405,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
