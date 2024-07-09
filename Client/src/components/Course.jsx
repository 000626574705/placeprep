
import Cards from "./Cards"
import list from '../../public/list.json'
function Course() {
  return (
    <>
     <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
      <div className="mt-16 items-center justify-center text-center">
        <h1 className="font-semibold text-2xl md:text-4xl" >We are Delight to have you <span className="text-pink-500 ">here!!:)</span></h1>
         <p className="mt-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae sit modi, ab corporis expedita quidem ducimus sunt culpa, qui, officiis dolorum. Veniam at accusamus voluptas doloremque odio ea deserunt modi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ullam ab ratione quaerat inventore dignissimos nobis, assumenda ipsa temporibus doloremque dicta, facilis hic, non enim officia a veniam modi. Laboriosam!</p>
       <button className="bg-pink-500 text-white px-4 py-2  mt-6 rounded-md hover:bg-pink-700 duration-300"><a href="/">Back</a></button>
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
        {
           list.map((item) => (
            <Cards key={item.id} item={item} />
           ))
        }
      </div>
     </div>
    </>
  )
}

export default Course
