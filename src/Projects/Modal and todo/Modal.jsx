import { useEffect, useRef, useState } from "react"

export default function Modal() {
  const [isOpen, setIsOpen] = useState(false);
  const refStyledModal = useRef();

  useEffect(function () {
    document.addEventListener('click', function (e) {
      if (refStyledModal.current && !refStyledModal.current.contains(e.target))
        setIsOpen(false);
    }, true)

    return document.removeEventListener("click", function (e) {
      if (refStyledModal.current && !refStyledModal.current.contains(e.target))
        console.log("Outside");
    }, true)

  }, [])

  function handleOpen() {
    setIsOpen(true)
  }

  function handleClose() {
    setIsOpen(false);
  }

  return (
    <div style={{ border: "4px solid black" }} ref={refStyledModal}>
      {!isOpen && <button onClick={handleOpen}>Open</button>}
      {
        isOpen
        && <div>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti eum sed eveniet voluptates officiis voluptatum blanditiis! Nam perferendis distinctio molestias iste ex assumenda, dolore doloremque, veritatis ut aut, quas sit.
          </p>
          <button onClick={handleClose}>Close</button>
        </div>
      }
    </div >
  )
}