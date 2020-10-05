import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import styles from '../../assets/css/scrollbar.css';

type Props = {
  show: boolean;
  onHide: () => void;
  onAdd: (value: string) => void;
};

export default function AddProxies(props: Props) {
  const { show, onHide, onAdd } = props;
  let newValue = '';

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    newValue = e.currentTarget.value;
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header
        closeButton
        style={{ background: 'rgb(54,54,54)', borderBottom: 'none' }}
      >
        <Modal.Title
          id="contained-modal-title-vcenter"
          style={{ fontSize: '20px' }}
        >
          Add Proxies
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: 'rgb(37,37,37)' }}>
        <textarea
          className={styles['scrollbar-primary']}
          onChange={onChange}
          style={{
            background: 'rgb(37,37,37)',
            width: '100%',
            height: '200px',
            color: 'white',
            whiteSpace: 'nowrap',
            resize: 'none'
          }}
        />
      </Modal.Body>
      <Modal.Footer style={{ background: 'rgb(54,54,54)', borderTop: 'none' }}>
        <Button
          variant="success"
          size="sm"
          onClick={() => onAdd(newValue)}
          style={{ background: 'rgb(39, 39, 39)' }}
        >
          Add
        </Button>
        <Button
          size="sm"
          onClick={onHide}
          style={{ background: 'rgb(39, 39, 39)' }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

AddProxies.defaultProps = {
  show: false,
  onHide: () => {
    console.log('onHide undefined');
  },
  onAdd: (value: string) => {
    console.log('onAdd undefined');
  }
};
