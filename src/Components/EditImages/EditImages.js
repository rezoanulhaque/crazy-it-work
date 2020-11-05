import React, { Fragment } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Header from '../Header/Header';
import './EditImages.css';
import ResizableContent from './ResizableContent';
import shirt from '../../images/blue_tshirt.jpg';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const EditImages = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [text, setText] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };
  let value;
  const handleChange = (e) => {
    value = e.target.value;
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
    setText(value);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Input Your Text</h2>
      <input type="text" onChange={handleChange} />
      <button variant="primary" onClick={handleSave}>
        Save Changes
      </button>
      <button variant="primary" onClick={handleClose}>
        Close
      </button>
    </div>
  );
  return (
    <div>
      <Header></Header>
      <div className="editimageboby">
        <button type="button" onClick={handleOpen}>
          Input Your Text
      </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
        <div className="imagediv">
          <img src={shirt} alt="T-shirt" />
          <div class="text">
            <Fragment >
              <ResizableContent
                top={10}
                left={-40}
                width={100}
                height={100}
                rotateAngle={0}
              >
                <div className='content content1'>
                   <h2>{text}</h2>
                </div>
              </ResizableContent>
            </Fragment>
            </div>
        </div>

      </div>
    </div>
  );
};

export default EditImages;