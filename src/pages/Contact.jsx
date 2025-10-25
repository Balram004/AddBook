import React from 'react'

const Contact = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="container mx-auto p-4 sm:p-8 flex flex-col" style={{ minHeight: 'calc(100vh - 68px)' /* Adjust 68px based on your Navbar's height */ }}>
      <div className="flex-grow">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">Contact Us</h1>
        <p className="text-base sm:text-lg text-center mb-8">
          We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
        </p>
        <div className="max-w-lg mx-auto bg-white text-black p-6 sm:p-8 rounded-lg shadow-lg">
          <p className="mb-4">
            <strong>Email:</strong> <a href="mailto:balramtomar201@gmail.com" className="text-blue-600 hover:underline break-all">balramtomar201@gmail.com</a>
          </p>
          <p className="mb-4">
            <strong>Address:</strong> 123 Bookworm Lane, Reading City, BK 45678
          </p>
        </div>
      </div>
      <footer className="text-center text-gray-500 text-sm mt-12 py-4">
        <p>&copy; {currentYear} Balram. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Contact
