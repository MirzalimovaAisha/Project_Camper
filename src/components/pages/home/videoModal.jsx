import React, { useState } from "react";
import {
    MainContainer,
    MainVideoContainer,
    SectionTitle,
} from "../../../style/style";
import "react-multi-carousel/lib/styles.css";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import video1 from "../../../assets/home-box-1.png";
import video2 from "../../../assets/home-box-2.png";
import video3 from "../../../assets/home-box-3.png";
import video4 from "../../../assets/home-box-4.png";
import video5 from "../../../assets/home-box-5.png";
import video6 from "../../../assets/home-box-6.png";
import video7 from "../../../assets/home-box-7.png";
import video8 from "../../../assets/home-box-8.png";

const videos = [
    { id: 1, src: video1, iframe: "https://www.youtube.com/embed/7mEcEtu0Y_0?si=gI1QOJdLaZqFdoHr" },
    { id: 2, src: video2, iframe: "https://www.youtube.com/embed/oXJhcj25ryc?si=-hwiBm5Fn2JEsAN4" },
    { id: 3, src: video3, iframe: "https://www.youtube.com/embed/G9XhLca9JSk?si=TTnwvErXKrJxAnvN" },
    { id: 4, src: video4, iframe: "https://www.youtube.com/embed/YW_MCJruPqM?si=onc1TSJzw0OEPeWG" },
    { id: 5, src: video5, iframe: "https://www.youtube.com/embed/qo2Kq7w9v9Q?si=ekGhxtKgqK9Mg4q4" },
    { id: 6, src: video6, iframe: "https://www.youtube.com/embed/rTqVFI57Tbg?si=k5Ah2wSwjfF-oIcO" },
    { id: 7, src: video7, iframe: "https://www.youtube.com/embed/AC1tnZ9l-9U?si=xYX8yCsYOIyt9syL" },
    { id: 8, src: video8, iframe: "https://www.youtube.com/embed/CVvX3A88Sl4?si=iXECi8Kfqb893CLn" }
];

const VideoModal = () => {
    const [open, setOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleOpen = (video) => {
        setSelectedVideo(video);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedVideo(null);
    };

    return (
        <div>
            <MainContainer $videos>
                <SectionTitle>Videos</SectionTitle>
                <MainVideoContainer>
                    {videos.map(video => (
                        <React.Fragment key={video.id}>
                            <img
                                src={video.src}
                                alt='videos'
                                onClick={() => handleOpen(video)}
                                style={{ cursor: 'pointer' }}
                            />
                        </React.Fragment>
                    ))}
                    {selectedVideo && (
                        <Modal
                            aria-labelledby="modal-title"
                            aria-describedby="modal-desc"
                            open={open}
                            onClose={handleClose}
                            disableAutoFocus
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#000000CC",
                                zIndex: "999999999999",
                            }}
                            >
                            <Sheet
                                sx={{
                                    borderRadius: "20px",
                                    padding: "30px",
                                    p: 3,
                                    border: "none",
                                    width:"850px",
                                    height:"450px"
                                }}
                            >
                                <ModalClose variant="plain" sx={{ m: 1 }} onClick={handleClose} />
                                <Typography
                                    component="h2"
                                    id="modal-title"
                                    level="h4"
                                    fontWeight="lg"
                                    fontSize="23px"
                                    color="black"
                                    mb={1}
                                >
                                    video
                                </Typography>
                                {selectedVideo.iframe ? (
                                    <iframe
                                        width="100%"
                                        height="360px"
                                        src={selectedVideo.iframe}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                        style={{
                                            borderRadius:"20px"
                                        }}
                                    ></iframe>
                                ) : (
                                    <Typography>No video available</Typography>
                                )}
                            </Sheet>
                        </Modal>
                    )}
                </MainVideoContainer>
            </MainContainer>
        </div>
    );
};

export default VideoModal;
