import { useEffect, useRef, useState, } from "react"
import { FiCamera, FiCameraOff, FiCheck } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { TbCameraCheck } from "react-icons/tb";

const NotFound = () => {
  const videoRef = useRef(null)
  const photoRef = useRef(null)

  const [hasPhoto, setHasPhoto] = useState(false)
  const [toggle, setToggle] = useState(false)

  const takePhoto = () => {
    const width = 500
    const height = 500

    let video = videoRef.current
    let photo = photoRef.current

    photo.width = width
    photo.height = height

    let ctx = photo.getContext('2d')
    ctx.drawImage(video, 0, 0, width, height)
    setHasPhoto(true)
  }

  const closePhoto = () => {
    let photo = photoRef.current
    let ctx = photo.getContext('2d')

    ctx.clearRect(0, 0, photo.width, photo.height)
    setHasPhoto(false)
  }

  const savePhoto = () => {
    let photo = photoRef.current
    // Mengubah data canvas menjadi URL gambar
    const imgData = photo.toDataURL('image/png')
    // Membuat link unduhan dengan data gambar
    const link = document.createElement('a')
    link.href = imgData
    link.download = 'photo.png' // Nama file yang diunduh
    link.click()
  }

  useEffect(() => {
    const getVideo = () => {
      navigator.mediaDevices
        .getUserMedia({
          video: {width:512, height:512}
        })
        .then(stream => {
          let video = videoRef.current
          video.srcObject = stream
          toggle ? video.play() : video.pause()
        })
        .catch(err => {
          console.log(err)
        })
    }
    getVideo()
  })

  return (
    <div className="dark:text-white">
    <div className="my-3 ">
      <h1 className="text-4xl font-semibold">New User</h1>
      <p>CNN / NewUser</p>
    </div>
    <div className=" bg-white dark:bg-slate-700 duration-100 rounded-lg drop-shadow-md p-4 min-h-fit flex items-center">
      <div className="w-full h-min-screen flex flex-col gap-4 relative">
        <video ref={videoRef} className={`mx-auto rounded-lg drop-shadow-xl w-[512px] h-[512px] bg-slate-800 ${hasPhoto?'hidden':''}`}></video>
        <div className={`flex mx-auto gap-6 ${hasPhoto?'hidden':''}`}>
        <button
          className={`mx-auto bg-sky-500 p-4 rounded-full cursor-pointer text-white drop-shadow-lg`}
          onClick={() => setToggle(!toggle)}
        >
          {toggle?<FiCameraOff size={26}/>:<FiCamera size={26}/>}
        </button>
        <button
          className={`mx-auto bg-green-500 p-4 rounded-full text-white drop-shadow-lg ${!toggle?'cursor-default opacity-75':'cursor-pointer'} duration-300`}
          disabled={!toggle}
          onClick={takePhoto}
        >
          <TbCameraCheck size={26}/>
        </button>
        </div>
        <canvas ref={photoRef} className={`mx-auto rounded-lg drop-shadow w-[512px] h-[512px] bg-slate-800 ${hasPhoto?'':'hidden'}`}></canvas>
        <div className={`flex mx-auto gap-6 ${hasPhoto?'':'hidden'}`}>
          <button
            className="bg-red-500 p-4 rounded-full cursor-pointer text-white drop-shadow-lg"
            onClick={closePhoto}
          ><IoClose size={26}/>
          </button>
          <button
            className="bg-green-500 p-4 rounded-full cursor-pointer text-white drop-shadow-lg"
            onClick={savePhoto}
          ><FiCheck size={26}/>
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NotFound