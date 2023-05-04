type IconName = "javascript" | "django" | "python"

interface Icon {
    name: IconName;
    path: string; // path to the SVG icon file
  }
  
  export const icons: Icon[] = [
    { name: "django", path: "/svg_icons_tech_stack/django.svg" },
    { name: "javascript", path: "/svg_icons_tech_stack/javascript.svg" },
    { name: "python", path: "/svg_icons_tech_stack/python.svg" },
    // add more icons here as needed
  ];

  const RingedIconContainer: React.FC<{ iconNames: IconName[] }> = ({ iconNames }) => {
    return (
        <div className="flex flex-wrap gap-1 p-2">
        {iconNames.map((iconName, index) => { // add index as second argument to map function
          const icon = icons.find((i) => i.name === iconName);
          if (!icon) return null; // skip if icon not found
          return (
            <div key={index} className="relative rounded-full">
              <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
                <img src={icon.path} alt={icon.name} className="h-20 w-20 rounded-full" />
              </div>
            </div>
          );
        })}
      </div>
    );
  };  

export default RingedIconContainer;
