import React, { useState, useEffect } from 'react'
import { Button, Modal, Table, Form } from 'react-bootstrap'

function FileComplaint(props) {
    const [state, setState] = useState({})

    useEffect(() => {
        console.log(state)
    }, [state])
    const [data, setData] = useState(
        {
            "src": "images (a).png",
            "fullname": "Guilty",
            "alias": "Guilty",
            "dob": "FEB 09, 2022",
            "sex": "M",
            "height": "2' 2\"",
            "weight": "BRN",
            "eyes": "BRN",
            "hair": "BRN",
            "offenses": [
                {
                    "date": "2022/02/22",
                    "offense": "Did a lot of bad things",
                },
                {
                    "date": "2022/02/22",
                    "offense": "Did a lot of bad things",
                },
                {
                    "date": "2022/02/22",
                    "offense": "Did a lot of bad things",
                }
            ]
        }
    );

    const [lgShow, setLgShow] = useState(false);

    const formChange = (e) => {
        console.log("", e.target.files[0]);

        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = _handleReaderLoaded.bind(this)
            reader.readAsBinaryString(file)
        }

    }

    const _handleReaderLoaded = (readerEvt) => {
        let binaryString = readerEvt.target.result
        setState({ base64TextString: btoa(binaryString) })
    }

    return (
        <>
            <Button onClick={() => setLgShow(true)}>File a Complaint</Button>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        File a Complaint
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {state !== {} ? <><img style={{ width: 500 }} src={`data:image/jpeg;charset=utf-8;base64, ${state.base64TextString}`} />
                        <div> {`data:image/jpeg;charset=utf-8;base64, ${state.base64TextString}`} </div>
                    </> : null}
                    <Form onChange={(e) => formChange(e)} >
                        <input
                            type="file"
                            name="image"
                            id="file"
                            accept=".jpg"
                        />
                        <input type="submit" />

                    </Form>
                    <Table style={{ textAlign: 'left', width: '100%' }}>
                        <tr>
                            <td colSpan={4}>
                                <h3>{data.fullname}</h3>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4}>
                                <h6>Alias: {data.alias}<br />Affiliation(s): PWA (Puppies with Attitude)</h6>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                Dob {data.dob}
                            </td>
                            <td colSpan={2} >
                                LIC. CLASS
                                C
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Sex {data.sex}
                            </td>
                            <td colSpan={2} >
                                Hair {data.hair}
                            </td>
                            <td>
                                Eyes {data.eyes}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Ht {data.ht}
                            </td>
                            <td colSpan={2} >
                                Wt {data.wt}
                            </td>
                            <td >
                                Dl 123123
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2} >
                                Issued 11/26/09
                            </td>
                            <td colSpan={2} >
                                Expires 11/26/19
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={4}>
                                Misc. and State Specific Info.
                            </td>
                        </tr>
                        <tr>
                            <td>
                            </td>
                        </tr>
                    </Table>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default FileComplaint