import React, { useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { angle-left } from '@fortawesome/free-solid-svg-icons';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import CreateIcon from '@mui/icons-material/Create';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import Grid from '@mui/material/Grid';
import GifBoxIcon from '@mui/icons-material/GifBox';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { GiphyFetch } from '@giphy/js-fetch-api';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import LockRoundedIcon from '@mui/icons-material/LockRounded';

function Message() {

    const [search, setSearch] = useState("");
    const [data, setdata] = useState([]);
    const [open, setOpen] = React.useState(false);

    const [newTask, setNewTask] = useState("");
    const [task, setTasks] = useState([]);

    const [newGif, setNewgif] = useState(true);
    const gf = new GiphyFetch('SQHVFqgr63y9DkHCP8dF3Hxvlm4dD2Zj')

    const searchGif = async () => {
        const data = await gf.search(search, { sort: 'relevant', lang: 'es', limit: 15, type: 'stickers' })
        setdata(data.data)
        setOpen(true);
        console.log(data.data)
    }

    const handleClose = () => {
        setOpen(false);
    };



    function openInput() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }

    const selectGif = (e) => {

        setNewgif(e.target.currentSrc);
        setOpen(false);
    }

    const postMsg = (e) => {
        const txt = { text: newTask, img: newGif }
        setTasks([...task, txt])
        setNewgif(false);

    }

    const taskList = task.map((obj, index) => {
        console.log(obj)
        return (
            <div>

                <h2>{index + 1} </h2>
                <h3>{obj.text}</h3>
                {obj.img ? <img src={obj.img} height="200px" width="150px"></img> : ''}
               {/* <button onClick={() => { deleteTask(index) }}>Delete</button> */}
            </div>
        )
    })

    // function deleteTask(index) {
    //     var duplicateArray = [...task];
    //     duplicateArray.splice(index, 1)
    //     setTasks(duplicateArray)
    // }




    return (
        <>
            <div className="App">
                <div className='header'>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            '& > *': {
                                m: 0,
                            },
                        }}
                    > <ButtonGroup variant="text" aria-label="text button group" className="btn-group">
                            <Button> <CreateIcon style={{ color: "grey" }} /> Compose post</Button>
                            <Button> <CameraAltIcon style={{ color: "grey" }} /> Photo/ Video </Button>
                            <Button> <VideoCameraFrontIcon style={{ color: "grey" }} /> Video call </Button>
                        </ButtonGroup>
                    </Box>
                </div>

                <div className='textarea'>
                    <Grid container >
                        <Grid item>

                        </Grid>
                        <Grid item>
                            <TextareaAutosize
                                // className='textarea';
                                aria-label="empty textarea"
                                placeholder="Write Something here..."
                                style={{ width: "495px", height: "50px", border: "0px solid" }}
                                onChange={(e) => { setNewTask(e.target.value) }}
                                value={newTask}

                            ></TextareaAutosize>
                            <img className="selected-img" src={newGif} ></img>


                        </Grid>
                    </Grid>

                </div>
                <div className='row' style={{display:"flex"}}>

                    <div className='styleToDiv' style={{backgroundColor:"grey"}}><ArrowBackIosNewIcon fontSize="small" color="aliceblue"/></div>

                    <div className='sec-div' ></div>
                    <div className='styleToDiv' style={{}}></div>
                    <div className='styleToDiv' style={{backgroundImage: "linear-gradient(to top, #ff0844 0%, #ffb199 100%)"}}></div>
                    <div className='styleToDiv' style={{backgroundImage: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)"}}></div>
                    <div className='styleToDiv' style={{backgroundImage: "linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)"}}></div>
                    <div className='styleToDiv' style={{backgroundImage: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)"}}></div>
                    <div className='styleToDiv' style={{backgroundImage: "linear-gradient(to top, #f43b47 0%, #453a94 100%)"}}></div>
                    <div className='styleToDiv' style={{backgroundImage: "linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)"}}></div>
                    <div className='styleToDiv' style={{backgroundImage: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)"}}></div>
                    <div className='styleToDiv' style={{backgroundImage: "linear-gradient(to right, #fa709a 0%, #fee140 100%)"}}></div>
                    <div className='styleToDiv' style={{backgroundImage: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)"}}></div>
                    <div className='styleToDiv' style={{backgroundImage: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)"}}></div>
                    <div className='styleToDiv' style={{backgroundImage: "linear-gradient(to right, #00dbde 0%, #fc00ff 100%)"}}></div>
                    <div className='styleToDiv' style={{backgroundImage: "linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%)"}}></div>
                    <div className='styleToDiv' style={{backgrounImage: "linear-gradient(to top, #30cfd0 0%, #330867 100%)"}}></div>
                    <div className='styleToDiv' style={{backgroundImage: "linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)"}}></div>
                    <div className='styleToDiv' style={{backgrounImage: "linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)"}}></div>
                    <div className='styleToDiv' style={{backgroundImage: "linear-gradient(to top, #0fd850 0%, #f9f047 100%)"}}></div>
                    <div className='styleToDiv' style={{backgroundImage: "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)"}}></div>
                    

                </div>
                <hr style={{ width: "100%" }} />
                <div className='gif'>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            '& > *': {
                                m: 1,
                            },
                        }}
                    >
                        <Grid container>
                            <Grid item xs='5' style={{ border: "1px solid grey", marginRight: "83px", borderRadius: "10px", backgroundColor: 'lightgray',height:"33px" }}>

                                <Button> <PersonAddAlt1Icon style={{ color: "red", marginRight: "8px" }} /> Tag Friend </Button>

                            </Grid>

                            <Grid item xs='5' style={{ border: "1px solid grey", borderRadius: "10px", backgroundColor: 'lightgray',height:"33px" }}>

                                <Button> <LocationOnIcon style={{ color: "orange", marginRight: "8px" }} /> Check In</Button>

                            </Grid>

                        </Grid>

                        <Grid container >
                            <Grid item xs='5' style={{ border: "1px solid grey", marginRight: "83px", borderRadius: "10px", backgroundColor: 'lightgray',height:"33px" }}>

                                <Button onClick={openInput}> <GifBoxIcon style={{ color: "grey", marginRight: "8px", padding : "1px" }} /> Add gif </Button>

                            </Grid>

                            <Grid item xs='5' style={{ border: "1px solid grey", borderRadius: "10px", backgroundColor: 'lightgray',height:"33px" }}>

                                <Button> <PersonAddAlt1Icon style={{ color: "green", marginRight: "8px", padding : "1px" }} /> Tag event </Button>

                            </Grid>

                        </Grid>

                    </Box>
                </div>

                <div className='footer'>
                    <Grid container style={{ marginLeft: "-15px", }}>
                        <Grid item xs={6} >
                            <div id='myDIV'>
                                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search Gif" />

                                <button onClick={searchGif}>Search</button>
                            </div>

                            <div>

                                <Dialog align="center" style={{position:"absolute", height:"45%", width: "25%", marginLeft: "27%", marginTop: "29%"}}
                                    open={open}
                                    onClose={handleClose}
                                >

                                    <DialogContent>
                                        {/* <div className='display' id='clearDiv'> */}

                                            {data && data.map(abc => {

                                                return <img onClick={selectGif} src={abc.images.downsized_large.url} alt="abc" height="200px" width="100px"></img>
                                            })}
                                        {/* </div> */}
                                    </DialogContent>

                                </Dialog>
                            </div>
                        </Grid>

                        <Grid item xs={6} >

                            <Grid container style={{ marginLeft: "50px" }}>
                                <Grid item xs={3} ><Button style={{ width: "102px" }}><LockRoundedIcon fontSize="small"/>Only ME</Button></Grid>
                                <Grid item xs={3} style={{ marginLeft: "70px" }}><Button onClick={postMsg} variant="contained">Post</Button></Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                </div>
<br/>
                {/* <hr style={{ width: "100%" }} /> */}

            </div>
            <div >
                <div className='showPost'>

                    <h2 style={{ color: "red" }}>Your Post</h2>
                    {taskList}
                </div>
            </div>

        </>
    )
}

export default Message //image wor is left 