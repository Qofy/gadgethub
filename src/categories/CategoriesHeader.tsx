interface CategoriesHeaderProps {
  hearderclassName?: string;
  h1?: string;
  p?: string;

}

function CategoriesHeader({
  hearderclassName="category-header",
  h1 ="Browse Categories",
  p="Discover our wide range of smart home gadgets organized by category. Find exactly what you need for your modern lifestyle."
}:CategoriesHeaderProps) {
  return(
    <header className={hearderclassName}>
        <h1>
          {h1} 
        </h1>
        <p>
          {p}
        </p>
      </header>
  )
}
export default CategoriesHeader