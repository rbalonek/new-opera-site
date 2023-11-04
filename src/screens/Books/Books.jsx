import React from 'react'
import "./Books.css"

import AppleBooksLogo from "../../components/images/books/Apple-Books-Logo.png"
import AmazonBooksLogo from "../../components/images/books/Amazon_Books_logo.svg.png"
import BookCover from "../../components/images/books/BookCover.png"

export default function Books() {

  const AppleBookStore=() => {
    window.open("https://books.apple.com/us/book/id6456984500");
   
  }
  
  const AmazonBookStore=() => {
    window.open("https://amzn.to/3Of2J70");
}

  return (
    <div className='books-container'>
      <div className='book-holder'>
        <img  className='book-cover' src={BookCover} alt="book-cover" />
        <img onClick={AppleBookStore} className='books-logo' src={AppleBooksLogo} alt="apple-books" />
      </div>
      <div className='book-holder'>
        <img  className='book-cover' src={BookCover} alt="book-cover" />
        <img onClick={AmazonBookStore} className='books-logo' src={AmazonBooksLogo} alt="amazon-books" />
      </div>
    </div>
  )
}
