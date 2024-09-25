const AllIcons = () => {
  const icons = [
    {
      id: 1,
      title: "Introduction to JavaScript",
      image: "image1.jpg",
      name: "John Doe",
      category: "Programming",
    },
    {
      id: 2,
      title: "Mastering Python",
      image: "image2.jpg",
      name: "Jane Smith",
      category: "Programming",
    },
    {
      id: 3,
      title: "Learning Web Development",
      image: "image3.jpg",
      name: "Mike Johnson",
      category: "Web Development",
    },
    {
      id: 4,
      title: "Graph Algorithms",
      image: "image4.jpg",
      name: "Emily Davis",
      category: "Algorithms",
    },
    {
      id: 5,
      title: "Advanced CSS Techniques",
      image: "image5.jpg",
      name: "Chris Brown",
      category: "Web Design",
    },
  ];

  return (
    <div>
      {icons.map((icon) => (
        <div key={icon.id}>
          <h2>{icon.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default AllIcons;
