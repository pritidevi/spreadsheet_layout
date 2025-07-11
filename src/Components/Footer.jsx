

export default function Footer() {
  const onclickorder = () => {
    console.log('all order button  is clicked')
  }
  const onclickpending = () => {
    console.log('Pending button is clicked')
  }
  const onclickreviwed = () => {
    console.log('Reviewed button is clicked')
  }
  const onclickarrived = () => {
    console.log('Arrived button is clicked')
  }
  return (
    <>
      <div className="bg-gray-100  pl-[34px]  ml-2 flex ">
        <ul className='footer font-semibold'><li className={` footeritems mr-3  list-none li`}>
          <button onClick={onclickorder}>All Orders</button></li>
          <li className={` footeritems mr-3  list-none `} ><button onClick={onclickpending}>Pending</button></li>
          <li className={` footeritems mr-3  list-none `}><button onClick={onclickreviwed}>Reviewed</button></li>
          <li className={` footeritems mr-3  list-none `}><button onClick={onclickarrived}>Arrived</button></li>
          <li className='mx-3 text-center list-none '><button>+</button></li></ul>
      </div >
    </>
  )
}
