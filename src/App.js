import logo from "./logo.svg";
import "./App.css";
import { Helmet } from "react-helmet";

function App() {
  return (
    // <div className="App">
    <Helmet>
      <meta
        property="og:url"
        content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
      />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="When Great Minds Don’t Think Alike" />
      <meta
        property="og:description"
        content="How much does culture influence creative thinking?"
      />
      <meta
        property="og:image"
        content="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
      />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@nytimesbits" />
      <meta name="twitter:creator" content="@nickbilton" />
      <meta
        property="og:url"
        content="http://bits.blogs.nytimes.com/2011/12/08/a-twitter-for-my-sister/"
      />
      <meta property="og:title" content="A Twitter for My Sister" />
      <meta
        property="og:description"
        content="In the early days, Twitter grew so quickly that it was almost impossible to add new features because engineers spent their time trying to keep the rocket ship from stalling."
      />
      <meta
        property="og:image"
        content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg"
      />


    </Helmet>
    // </div>
  );
}

export default App;
