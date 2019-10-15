const parsMenu = (menu) => {
  const categoryList = [];
  menu.forEach((item) => {
    categoryList.push({
      id: item.categoryId,
      title: item.category
    });
  });

  return {
    categoryList
  };
};

export default parsMenu;
