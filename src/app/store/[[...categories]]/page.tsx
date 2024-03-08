interface CategoriesProps {
    params: {
        categories: string[]
        searchParams: string
    }
}

export default function Categories(props: CategoriesProps){
    const { categories } = props.params
    // throw new Error('Error:Boom!')
    return(
        <h1>Categoría dinámica {categories}</h1>
    );
}