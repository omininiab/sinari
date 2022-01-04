/*<![CDATA[*/
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }
  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }
  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'ominini.myshopify.com',
      storefrontAccessToken: '2792609daf9b1251ad64815bb7e58406',
    });
    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('collection', {
        id: '284222685378',
        node: document.getElementById('collection-component-1641253466536'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
  "product": {
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "calc(25% - 20px)",
          "margin-left": "20px",
          "margin-bottom": "50px",
          "width": "calc(25% - 20px)"
        }
      },
      "title": {
        "font-family": "Josefin Sans, sans-serif"
      },
      "button": {
        "font-family": "Josefin Sans, sans-serif",
        ":hover": {
          "background-color": "#1C2120"
        },
        "background-color": "#1C2120",
        ":focus": {
          "background-color": "#1C2120"
        }
      },
      "price": {
        "font-family": "Josefin Sans, sans-serif"
      },
      "compareAt": {
        "font-family": "Josefin Sans, sans-serif"
      },
      "unitPrice": {
        "font-family": "Josefin Sans, sans-serif"
      }
    },
    "buttonDestination": "modal",
    "contents": {
      "options": false
    },
    "width": "580px",
    "text": {
      "button": "View product"
    },
    "googleFonts": [
      "Josefin Sans",
      "Josefin Sans"
    ]
  },
  "productSet": {
    "styles": {
      "products": {
        "@media (min-width: 601px)": {
          "margin-left": "-20px"
        }
      }
    }
  },
  "modalProduct": {
    "contents": {
      "img": false,
      "imgWithCarousel": true,
      "button": false,
      "buttonWithQuantity": true
    },
    "styles": {
      "product": {
        "@media (min-width: 601px)": {
          "max-width": "100%",
          "margin-left": "0px",
          "margin-bottom": "0px"
        }
      },
      "button": {
        "font-family": "Josefin Sans, sans-serif",
        ":hover": {
          "background-color": "#1C2120"
        },
        "background-color": "#1C2120",
        ":focus": {
          "background-color": "#1C2120"
        }
      },
      "title": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "bold",
        "font-size": "26px",
        "color": "#F8F7F2"
      },
      "price": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "18px",
        "color": "#F8F7F2"
      },
      "compareAt": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#F8F7F2"
      },
      "unitPrice": {
        "font-family": "Helvetica Neue, sans-serif",
        "font-weight": "normal",
        "font-size": "15.299999999999999px",
        "color": "#F8F7F2"
      }
    },
    "googleFonts": [
      "Josefin Sans"
    ],
    "text": {
      "button": "Add to cart"
    }
  },
  "option": {
    "googleFonts": [
      "Josefin Sans"
    ]
  },
  "cart": {
    "styles": {
      "button": {
        "font-family": "Josefin Sans, sans-serif",
        ":hover": {
          "background-color": "#1C2120"
        },
        "background-color": "#1C2120",
        ":focus": {
          "background-color": "#1C2120"
        }
      }
    },
    "text": {
      "total": "Subtotal",
      "button": "Checkout"
    },
    "popup": false,
    "googleFonts": [
      "Josefin Sans"
    ]
  },
  "toggle": {
    "styles": {
      "toggle": {
        "font-family": "Josefin Sans, sans-serif",
        "background-color": "#1C2120",
        ":hover": {
          "background-color": "#1C2120"
        },
        ":focus": {
          "background-color": "#1C2120"
        }
      }
    },
    "googleFonts": [
      "Josefin Sans"
    ]
  }
},
      });
    });
  }
})();
/*]]>*/