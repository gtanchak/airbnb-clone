import { FC } from "react";

const link = [
  {
    title: "ABOUT",
    links: [
      "How Airbnb Works",
      "Newsroom",
      "Investors",
      "Airbnb Plus",
      "Airbnb Luxe",
    ],
  },
  {
    title: "COMMUNITY",
    links: [
      "Accessibility",
      "This is not a real site",
      "Its a pretty awesome clone",
      "Referrals AcceptedAirbnb Plus",
    ],
  },
  {
    title: "HOST",
    links: ["GitHub", "Vercel", "Airbnb", "React", "NodeJS"],
  },
  {
    title: "SUPPORT",
    links: [
      "Help Center",
      "Trust & Safety",
      "Say Hi YouTube",
      "Easter Eggs",
      "For the Win",
    ],
  },
];

const Footer: FC = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
    {link.map(({ title, links }) => (
      <div className="space-y-4 text-sm text-gray-800">
        <h5 className="font-bold">{title}</h5>
        {links.map((list) => (
          <p>{list}</p>
        ))}
      </div>
    ))}
  </div>
);

export default Footer;
