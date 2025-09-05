import Header from "../categories/CategoriesHeader"

function News() {
  return (
    <div className="news-container">
    <Header hearderclassName="news-header"  h1="Never Miss a Deal" p="Subscribe to our newsletter and be the first to know about exclusive deals, flash sales, and new product launches."/>

    <div className="subscribe-form">
    <input type="email" placeholder="Enter your email" name="mail" required/>
    <button className="subscribe-btn">Subscribe</button>
    </div>
    </div>

  )
}

export default News