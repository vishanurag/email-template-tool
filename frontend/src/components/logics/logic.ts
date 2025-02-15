type mail = {
  title: {
    data: string,
    color: string,
    font: string
  },
  content: {
    data: string,
    color: string,
    font: string
  },
  author: {
    data: string,
    color: string,
    font: string
  },
  image: {
    data: string,
    color: string,
    font: string
  }
};


let email: mail = { 
  title: {
    data: "Your Title",
    color: "black",
    font: "font-Times-New-Roman"
  }, 
  content: {
    data: "lorem ipsum doner shit.lorem ipsum doner shit.lorem ipsum doner shit.lorem ipsum doner shit.lorem ipsum doner shit...",
    color: "black",
    font: "font-Times-New-Roman"
  }, 
  author: {
    data: "Your Author",
    color: "black",
    font: "font-Times-New-Roman"
  }, 
  image: {
    data: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1msyO8.img",
    color: "black",
    font: "font-Times-New-Roman"
  }
};

export default email;