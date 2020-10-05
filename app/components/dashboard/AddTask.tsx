import React, { CSSProperties } from 'react';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import styles from '../../assets/css/select.css';

type Props = {
  show: boolean;
  stores: StoreData[];
  proxies: ProxyData[];
  onHide: () => void;
  onAdd: (tasks: TaskData[]) => void;
};

let id = 0;

export default function AddTask(props: Props) {
  const { show, stores, proxies, onHide, onAdd } = props;

  const [sizes, setSizes] = React.useState([] as string[]);

  const storeList = stores.map((s, i) => {
    return (
      <option key={i} value={i}>
        {s.name}
      </option>
    );
  });

  const proxyList = proxies.map((p, i) => {
    return (
      <option key={p.id} value={i}>
        {p.ip}
      </option>
    );
  });

  let productInput: HTMLInputElement;
  let storeSelect: HTMLSelectElement;
  let sizeSelect: HTMLSelectElement;
  let profileSelect: HTMLSelectElement;
  let proxiesSelect: HTMLSelectElement;
  let accountSelect: HTMLSelectElement;

  function onStoreChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const index = parseInt(event.target.value, 10);
    setSizes(stores[index].sizes);
  }

  function onCreate() {
    // console.log(productInput);
    onAdd([
      {
        id: id++,
        store: storeSelect.value,
        size: sizeSelect.value,
        profile: 'test',
        proxies: proxiesSelect.value,
        status: '',
        actions: ''
      }
    ]);
    onHide();
  }
  function onClose() {
    setSizes([]);
    onHide();
  }

  return (
    <Modal
      show={show}
      onHide={onClose}
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
          Create Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ background: 'rgb(37,37,37)' }}>
        <Row style={{ marginBottom: '10px' }}>
          <Col xs={6}>
            <div>
              <strong>Store</strong>
            </div>
            <select
              className={styles.placeholder}
              onChange={onStoreChange}
              required
              defaultValue=""
              ref={c => {
                storeSelect = c as HTMLSelectElement;
              }}
            >
              <option value="" disabled>
                Select Store
              </option>
              {storeList}
            </select>
          </Col>
          <Col xs={6}>
            <div>
              <strong>Size</strong>
            </div>
            <select
              className={styles.placeholder}
              required
              defaultValue=""
              ref={c => {
                sizeSelect = c as HTMLSelectElement;
              }}
            >
              <option value="" disabled>
                Select Size
              </option>
              {sizes.map(v => {
                return (
                  <option key={v} value={v}>
                    {v}
                  </option>
                );
              })}
            </select>
          </Col>
        </Row>
        <Row style={{ marginBottom: '10px' }}>
          <Col>
            <div>
              <strong>Product</strong>
            </div>
            <div className="input-group">
              <div className="input-group-prepend">
                <i
                  className="fa fa-search my-auto input-group-text"
                  style={{ background: 'rgb(57, 57, 57)', border: 'none' }}
                />
              </div>
              <input
                type="text"
                placeholder="Keywords"
                ref={c => {
                  productInput = c as HTMLInputElement;
                }}
                style={{
                  width: '91.6%',
                  background: 'rgb(57, 57, 57)',
                  border: 'none',
                  color: 'white'
                }}
              />
            </div>
          </Col>
        </Row>
        <Row style={{ marginBottom: '10px' }}>
          <Col xs={6}>
            <div>
              <strong>Profile</strong>
            </div>
            <select
              className={styles.placeholder}
              required
              defaultValue=""
              ref={c => {
                profileSelect = c as HTMLSelectElement;
              }}
            >
              <option value="" disabled>
                Select Profile
              </option>
            </select>
          </Col>
          <Col xs={6}>
            <div>
              <strong>Proxies</strong>
            </div>
            <select
              className={styles.placeholder}
              required
              defaultValue=""
              ref={c => {
                proxiesSelect = c as HTMLSelectElement;
              }}
            >
              <option value="" disabled>
                Select Proxies
              </option>
              {proxyList}
            </select>
          </Col>
        </Row>
        {/* <Row>
          <Col xs={6}>
            <div>
              <strong>Account</strong>
            </div>
            <select
              className={styles.placeholder}
              required
              defaultValue=""
              ref={c => {
                accountSelect = c as HTMLSelectElement;
              }}
            >
              <option value="" disabled>
                Select Account
              </option>
            </select>
          </Col>
        </Row> */}
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

AddTask.defaultProps = {
  show: false,
  stores: [],
  proxies: [],
  onHide: () => {
    console.log('onHide undefined');
  },
  onAdd: (value: string) => {
    console.log('onAdd undefined');
  }
};
