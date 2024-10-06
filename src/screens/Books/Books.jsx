import React from 'react'
import "./Books.css"

import AppleBooksLogo from "../../components/images/books/Apple-Books-Logo.png"
import AmazonBooksLogo from "../../components/images/books/Amazon_Books_logo.svg.png"
import BookCover from "../../components/images/books/BookCover.png"
import { Helmet } from "react-helmet";

export default function Books() {

  const AppleBookStore=() => {
    window.open("https://books.apple.com/us/book/id6456984500");
   
  }
  
  const AmazonBookStore=() => {
    window.open("https://amzn.to/3Of2J70");
}

  return (
    <div className='books-page-container'>
      <div className="books-text__cointainer">
      <h3>This comprehensive guide is specifically designed to empower opera singers with the knowledge and tools necessary to achieve financial success and stability in their careers. As an opera singer, your talent, dedication, and artistic expression are the driving forces behind your profession. However, understanding and effectively managing your finances are equally crucial for a sustainable and fulfilling career in the opera industry.
      </h3>
      <h4><span className="bold-text">What this book is:</span> A comprehensive guide to building a strong safety net, and giving the reader the tools they need to sustain a career as a performer while feeling financially secure.</h4>
      <h4><span className="bold-text">What this book is not:</span> a how to book on making money quick and easy. Still working that out…</h4>
      </div>
      <div className='books-container'>
    <Helmet>
    <title>Books - Robert Balonek - Bay Area Baritone</title>
    <meta name="description" content="Learn more about Robert Balonek, a Bay Area Baritone specializing in Verdi Baritone roles, Rigoletto, Iago, Scarpia" />
    <meta name="keywords" content="Robert Balonek, Bay Area Baritone, Verdi Baritone, Baritone, Opera, Classical Singer, Figaro, Oratorio, Scarpia, Iago, Rigoletto" />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Robert Balonek" />
    <meta name="publisher" content="Robert Balonek " />
    <link rel="canonical" href="https://www.robertbalonek.com/books" />
    </Helmet>
    
    <div className='book-holder'>
    <img  className='book-cover' src={BookCover} alt="book-cover" />
    <img onClick={AppleBookStore} className='books-logo' src={AppleBooksLogo} alt="apple-books" />
    </div>
    <div className='book-holder'>
    <img  className='book-cover' src={BookCover} alt="book-cover" />
    <img onClick={AmazonBookStore} className='books-logo' src={AmazonBooksLogo} alt="amazon-books" />
    </div>
    </div>
    </div>
  )
}
