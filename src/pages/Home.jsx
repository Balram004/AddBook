import React from 'react'

const Home = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Your Book Library!</h1>
      <p className="text-lg mb-6">
        This is your personal space to manage and explore your favorite books.
        You can add new books to your collection and view them anytime.
      </p>
      <img src="https://images.unsplash.com/photo-1532012197267-da84d127e765" alt="A library of books" className="mx-auto rounded-lg shadow-lg" style={{ maxHeight: '500px' }} />
    </div>
  )
}

export default Home
