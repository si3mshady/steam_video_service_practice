
import { FaPlay ,FaRegHandPeace,FaInfinity, FaVolumeMute, FaVolumeUp,FaPause} from 'react-icons/fa';
import { Layout, Menu } from 'antd';
import React, { useRef, useState } from 'react';
import './App.css'


const { Header, Content, Footer, Sider } = Layout;

function App() {
  const videoRef = useRef(null)
  const [sound,setSound] = useState(false)
  const [loop,setLoop] = useState(false)

  const playVideo = () => {
    videoRef.current.play()
  }
  const pauseVideo = () => {
    videoRef.current.pause()
  }


  return (
  
  <Layout hasSider>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        
      }}
    >
    

        <Menu   theme="dark">
            <Menu.Item><FaPlay onClick={playVideo} className='button-play'/></Menu.Item>
            <Menu.Item><FaPause onClick={pauseVideo} className='button-pause'/></Menu.Item>
            <Menu.Item><FaVolumeUp onClick={() => setSound(false)} className='button-volup'/></Menu.Item>
            <Menu.Item><FaVolumeMute onClick={() => setSound(true)} className='button-voldown'/></Menu.Item>
            <Menu.Item><FaInfinity onClick={() => setLoop(!loop)} className='button-loop'/></Menu.Item>
          
      </Menu>


    </Sider>
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
      }}
    >
   
      <Content
        style={{
          margin: '0',
          overflow: 'initial',
        }}
      >
        <div
          className="site-layout-background"
         
        >
           <video ref={videoRef} id="vidContent" width="100%" loop={loop} muted={sound} >

              <source src="http://localhost:888/videos" type="video/mp4"/>

              </video>
         
        </div>
      </Content>
      
    </Layout>
  </Layout>

  )

      }

export default App;