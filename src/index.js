import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./layouts/Header";
import NavBar from "./layouts/NavBar";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Laptops from "./components/Laptops";
import Mobiles from "./components/Mobiles";
import Tablets from "./components/Tablets";
import Footer from "./layouts/Footer";
import "./styles.scss";

function App() {
  // State for Cart Counts
  let [cart, setCart] = useState([]);

  // Update Count
  let updateCount = data => {
    setCart([...cart, data]);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header cart={cart} />
        <div className="app-components">
          <Route exact path="/" render={() => <Home />} />
          <Route
            path="/laptops"
            render={() => <Laptops data={laptops} updateCount={updateCount} />}
          />
          <Route
            path="/mobiles"
            render={() => <Mobiles data={mobiles} updateCount={updateCount} />}
          />
          <Route
            path="/tablets"
            render={() => <Tablets data={tablets} updateCount={updateCount} />}
          />
          <Route path="/cart" render={() => <Cart cart={cart} />} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

// Laptops Data's

const laptops = [
  {
    id: 1,
    heading: "MacBook Pro",
    price: 1200,
    description:
      "I want everbody to be happy. That's what it's all about. Zip. That easy. See how easy it is to create a little tree right in your world.",
    src:
      "https://cnet3.cbsistatic.com/img/7V92kOKH-FONmP8P1pdUqL9gpww=/1204x677/2017/06/27/13484418-bfd9-41e2-8f2d-9b4afb072da8/apple-macbook-pro-15-inch-2017-14.jpg"
  },
  {
    id: 2,
    heading: "Asus Zenbook",
    price: 800,
    description:
      "I thought today we would do a happy little picture. There we go. There is immense joy in just watching - watching all the little creatures in nature.",
    src:
      "https://blueprint-api-production.s3.amazonaws.com/uploads/card/image/839531/a388f7be-7299-46cd-8dbf-4ed8d95e9da3.jpg"
  },
  {
    id: 3,
    heading: "Samsung Newbook",
    price: 900,
    description:
      "That's what painting is all about. It should make you feel good when you paint. There's not a thing in the world wrong with washing your brush.",
    src:
      "https://cdn.arstechnica.net/wp-content/uploads/2019/01/20190123-01.jpg"
  },
  {
    id: 4,
    heading: "Dell XPS",
    price: 1400,
    description:
      " Let's get crazy. If you do too much it's going to lose its effectiveness. There's nothing wrong with having a tree as a friend.",
    src:
      "https://c.s-microsoft.com/en-ca/CMSImages/Windows10_ViewAll__hero_1920.jpg?version=272adaad-6140-ae82-856e-3ddb4f247fe4"
  },
  {
    id: 5,
    heading: "Razor Bladebook",
    price: 1300,
    description:
      "This is probably the greatest thing to happen in my life - to be able to share this with you. See there how easy that is.",
    src:
      "https://d4kkpd69xt9l7.cloudfront.net/sys-master/images/he0/hfd/9110603038750/razer-blade-stealth-13-hero-mobile.jpg"
  },
  {
    id: 6,
    heading: "Microsoft Surfacebook",
    price: 1300,
    description:
      "We touch the canvas, the canvas takes what it wants. Use absolutely no pressure. Just like an angel's wing. Just let this happen.",
    src:
      "https://s.yimg.com/ny/api/res/1.2/6Vd_3R3UhOwXTCubj_es1g--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9ODAw/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/333ffbd0d6888930d1b62b65f3ff34ae"
  }
];

// Mobiles Data's

const mobiles = [
  {
    id: 1,
    heading: "OPPO F7",
    price: 400,
    description:
      " We'll put a happy little sky in here. It is a lot of fun. I thought today we would make a happy little stream that's just running through the woods here.",
    src:
      "https://btech.com/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/s/4/s4_1.jpg"
  },
  {
    id: 2,
    heading: "Iphone 6",
    price: 450,
    description:
      "I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff.",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/81qiCrJlzgL._SX569_.jpg"
  },
  {
    id: 3,
    heading: "Iphone X",
    price: 700,
    description:
      "You can work and carry-on and put lots of little happy things in here. We'll take a little bit of Van Dyke Brown. It looks so good, I might as well not stop.",
    src:
      "https://images.pricerunner.com/product/1200x630/1728769661/Apple-iPhone-X-64GB.jpg"
  },
  {
    id: 4,
    heading: "Iphone 8",
    price: 600,
    description:
      "Paint anything you want on the canvas. Create your own world. Have fun with it. Every highlight needs it's own personal shadow.",
    src: "https://static.toiimg.com/photo/57757773.cms?imglength=41211"
  },
  {
    id: 5,
    heading: "Samsung Galaxy 10",
    price: 900,
    description:
      "Maybe there's a happy little Evergreen that lives here. All those little son of a guns. Just let these leaves jump off the brush",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkWWPhxmRsGnXy8_RWKAjERcV22IW7uVet513_D5P5_88mUEM"
  },
  {
    id: 6,
    heading: "Oneplus 6T",
    price: 700,
    description:
      "It just happens - whether or not you worried about it or tried to plan it. You can work and carry-on and put lots of little happy things in here. Pretend you're water. ",
    src:
      "https://www.91-img.com/pictures/127444-v13-oneplus-6t-mobile-phone-large-1.jpg"
  }
];

// Tablets Data's

const tablets = [
  {
    id: 1,
    heading: "Ipad Pro 10.5",
    price: 950,
    description:
      "We might as well make some Almighty mountains today as well, what the heck. Let's make some happy little clouds in our world.",
    src:
      "https://m.xcite.com/media/catalog/product/cache/1/small_image/250x/9df78eab33525d08d6e5fb8d27136e95/b/u/buy_apple_ipad_pro_2018_11-inch_tablet_-_silver_lowest_price_in_kuwait_3.jpg"
  },
  {
    id: 2,
    heading: "Huawei Mate X",
    price: 2100,
    description:
      "Let's have a happy little tree in here. With something so strong, a little bit can go a long way. You can create anything that makes you happy. ",
    src: "https://cdn.newsapi.com.au/image/v1/26f24a3c04e73b83d299093a5caa4b77"
  },
  {
    id: 3,
    heading: "Surface Pad",
    price: 1700,
    description:
      "A tree cannot be straight if it has a crooked trunk. Talent is a pursued interest. That is to say, anything you practice you can do. ",
    src:
      "https://images-na.ssl-images-amazon.com/images/I/415wAvWF3nL._AC._SR360,460.jpg"
  },
  {
    id: 4,
    heading: "Samsung Galaxy Book 2",
    price: 1200,
    description:
      " Let your imagination be your guide. I really recommend you use odorless thinner or your spouse is gonna run you right out into the yard and you'll be working by yourself.",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdYwLpEAvb6iDkK1FZijROAFuZ5IzUk1bDS_zQQB5XfPPapnYjLw"
  },
  {
    id: 5,
    heading: "Google Pixel Slate",
    price: 800,
    description:
      "I think there's an artist hidden in the bottom of every single one of us. We'll throw some old gray clouds in here just sneaking around and having fun.",
    src:
      "https://www.androidcentral.com/sites/androidcentral.com/files/styles/large/public/article_images/2018/11/pixel-slate-render.jpg?itok=sISPBoiJ"
  },
  {
    id: 6,
    heading: "Ipad",
    price: 700,
    description:
      "Every highlight needs it's own personal shadow. That's what painting is all about. It should make you feel good when you paint. ",
    src:
      "https://www.abenson.com/media/catalog/product/cache/cdc1818358ee142db97e216b22d7548a/1/4/149337.jpg"
  }
];

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
