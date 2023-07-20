interface NavDataItem {
  id: number;
  name: string;
  iconName: string;
  idName: string;
}

const NavData: NavDataItem[] = [
  {
    id: 3,
    name: "Home",
    iconName: "home",
    idName: "home",
  },
  {
    id: 1,
    name: "Experience",
    iconName: "briefcase",
    idName: "experience",
  },
  {
    id: 2,
    name: "Articles",
    iconName: "pen",
    idName: "article",
  },
  {
    id: 4,
    name: "Contact",
    iconName: "contact",
    idName: "contact",
  },
];

export default NavData;
