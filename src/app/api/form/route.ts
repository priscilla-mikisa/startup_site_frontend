import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  success: boolean;
  message: string;
  data?: any;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    // Get the form data from the request body
    const formData = req.body;

    
    // For now, we'll just mock a successful response
    console.log('Received form submission:', formData);
    
    // Mock successful processing
    return res.status(200).json({
      success: true,
      message: 'Startup information submitted successfully!',
      data: { submissionId: 'mock-id-' + Date.now() }
    });
  } catch (error) {
    console.error('Error processing submission:', error);
    return res.status(500).json({
      success: false,
      message: 'An error occurred while processing your submission.'
    });
  }
}
