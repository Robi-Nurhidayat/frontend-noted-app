interface LinkProps {
    id: number;
    title: string;
    path: string;
  }
  
  const links: LinkProps[] = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "About",
      path: "/",
    },
    // {
    //   id: 3,
    //   title: "Features",
    //   path: "/",
    // },
    // {
    //   id: 4,
    //   title: "Success Stories",
    //   path: "/",
    // },
  ];
  
  export default links;
  