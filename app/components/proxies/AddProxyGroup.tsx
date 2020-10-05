import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import styles from './style.css';

type Props = {
  show: boolean;
  onHide: () => void;
  onAdd: (value: string) => void;
  proxyGroups: ProxyGroup[];
};

export default function AddProxyGroup(props: Props) {
  const { show, onHide, onAdd, proxyGroups } = props;
  let newValue = '';
  let exist = false;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    newValue = e.currentTarget.value;
    exist =
      proxyGroups.filter(v => {
        return v.name === newValue;
      }).length > 0;
    if (exist) {
      e.currentTarget.setAttribute('class', styles.danger);
    } else {
      e.currentTarget.setAttribute('class', '');
    }
  };

  function onCreate() {
    if (!exist) {
      onAdd(newValue);
      onHide();
    }
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="sm"
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
          Add Proxy Group
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: 'rgb(37,37,37)' }}>
        <div style={{ marginBottom: '10px' }}>
          <strong>Proxy Group Name</strong>
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Proxy Group"
            // ref={c => {
            //   productInput = c as HTMLInputElement;
            // }}
            style={{
              width: '100%',
              background: 'rgb(57, 57, 57)',
              border: 'none',
              color: 'white'
            }}
            onChange={onChange}
          />
        </div>
      </Modal.Body>
      <Modal.Footer style={{ background: 'rgb(54,54,54)', borderTop: 'none' }}>
        <Button
          variant="success"
          size="sm"
          onClick={onCreate}
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

AddProxyGroup.defaultProps = {
  show: false,
  onHide: () => {
    console.log('onHide undefined');
  },
  onAdd: (value: string) => {
    console.log('onAdd undefined');
  },
  proxyGroups: []
};
