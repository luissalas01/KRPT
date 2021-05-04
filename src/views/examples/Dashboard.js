import React from "react";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Modal,
    Progress
  } from "reactstrap";
  
  // core components
  import DashboardNavbar from "components/Navbars/DashboardNavbar.js";
  import backgroundBanner from "./../../assets/img/brand/FondoAnimadoW.mp4";
  import ABI from "./Kripty.json";
  import ABITOKEN from "./KriptyToken.json";
  import ABIESCROW from "./KriptyEscrow.json";
  import Web3 from 'web3';

class Dashboard extends React.Component {
    constructor(props){
        super(props)
        
        this.state = {
            activeUser: false,
            activeAcc: '',
            web3: undefined,
            items: [],
            openModal: false,
            itemToVote: undefined,
            votes: 0,
            contract: undefined,
            unclaimedTokens: 0,
            updateData: false,
            votingThreshold: 10000,
        };

    }

    loadData = async () => {
        const ethereum = window.ethereum;
        const web3 = new Web3(ethereum);
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        var contract = new web3.eth.Contract(ABI, '0xb3B8C1F336E598F8cae955B6F34980fFCba63a2c');
        var count = await contract.methods.proposalCount().call();
        var token = new web3.eth.Contract(ABITOKEN, '0x1dd4c4778b14d95dDB058CaEfb00Da142B32C93d');
        var votes = await token.methods.balanceOf(accounts[0]).call();
        
        var proposalss=[]
        for (let i=1; i<=count; i++){
            const prop = await this.getProposal(i, contract);
            
            proposalss.push(prop);
        }

        const requestOptions = {
                method: 'POST',
                mode: 'cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ address: accounts[0]})
        }


        await fetch("https://api.buzzerang.io/user/data/tokens", requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ unclaimedTokens: data.tokens }))
            .catch(err => console.log(err))
        

        this.setState({items: proposalss, activeAcc: accounts[0], activeUser: true, web3, votes, contract, updateData: false }); 
    }


    async componentDidMount() {
        this.loadData()
        window.ethereum.on('accountsChanged',  this.loadData);
    }

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.updateData !== this.state.updateData && this.state.updateData){
            this.loadData()
        }
    }

    getProposal = async (item, contract) => {
        var proposal = await contract.methods.proposals(item).call();
        //var proposalJson = [proposal.id, proposal.description, proposal.proVotes, proposal.againsVotes];
        
        return proposal;
    }

    voteModal = () => {
        console.log(this.state.openModal)
        if (this.state.openModal) this.setState({ openModal: false, itemToVote: undefined });
        else {
            this.setState({
                openModal: true,
                itemToVote: 1
            });
        }
    }

    vote = async (support) => {
        const { contract, activeAcc, itemToVote, web3 } = this.state;
        console.log(this.state)
        // var token = new web3.eth.Contract(ABITOKEN, '0x1dd4c4778b14d95dDB058CaEfb00Da142B32C93d');
        var gasPrice = await web3.eth.getGasPrice();
        // var estimateGas = await contract.methods.vote(activeAcc, itemToVote[0], false).estimateGas({ from: activeAcc, gasPrice})
        var txHash = await contract.methods.vote(activeAcc, itemToVote[0], support).send({ from: activeAcc, gasPrice})
        this.setState({ openModal: false, itemToVote: undefined, updateData: true })
    }

    claimTokens = async () => {
        const { activeAcc } = this.state;
        const ethereum = window.ethereum;
        const web3 = new Web3(ethereum);
        var escrow = new web3.eth.Contract(ABIESCROW, '0x41e3010dA4351eCb8b73f43FbF2C448E70De5CB5');
        var gasPrice = await web3.eth.getGasPrice();
        var txHash = await escrow.methods.claimTokens(this.state.unclaimedTokens).send({ from: activeAcc, gasPrice});
        this.setState({ unclaimedTokens: 0, updateData: true })
    }

    getTextPercentage(value){
        var total = this.state.votingThreshold
        return ((value * 100) / total).toString()
    }

    renderCards(){
        var items = this.state.items
        console.log(items)
        return items.map((item) => {
            return (
                <Col xl="3" lg="3" md="4" sm="10" xs="10" className="mb-4">
                        <Card className=" shadow border-0">
                            <CardHeader>
                                <h6>Tipo</h6>
                            </CardHeader>
                            <CardBody className="py-3">
                                <h6 style={{ color: "#000" }}>
                                Descripcion
                                </h6>
                                <div className="pt-4">
                                    <div className="text-center" >Favor votes</div>
                                    <Progress color="voteFavor" value={this.getTextPercentage(item.proVotes)}>{item.proVotes  + "/" + this.state.votingThreshold}</Progress>
                                    <div className="text-center" >Against votes</div>
                                    <Progress color="warning" value={this.getTextPercentage(item.againsVotes)}>{item.againsVotes + "/" + this.state.votingThreshold }</Progress>
                                </div>
                                <Button
                                className="mt-4"
                                color="success"
                                onClick={() => this.voteModal()}
                                >
                                Vote
                                </Button>
                            </CardBody>
                        </Card>
                    </Col>
            )

        })
    }

    render() {
      return (
        <>
        <DashboardNavbar />
        <main ref="main">
        <section className="section section-lg pb-250 my-cover-video" style={{ backgroundImage: `url(${backgroundBanner})`}}>
            <div className="shape shape-style-1 shape-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            </div>
            <video autoPlay muted loop id="myVideo">
                <source src={backgroundBanner} type="video/mp4" />
            </video>
            <Container className="pt-lg-12 pb-5">
            <Modal
                    className="modal-dialog-centered"
                    toggle={() => this.setState({ openModal: false })}
                    isOpen={this.state.openModal}
                    >
                    <div className="modal-header">
                        <h6 className="modal-title" id="modal-title-default">
                            Voting
                        </h6>
                        <button
                        aria-label="Close"
                        className="close"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => this.setState({ openModal: false })}
                        >
                        <span aria-hidden={true}>×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>
                        When you vote, all your Kripty tokens will be frozen until the proposal finishes
                        </p>
                        <p>
                        You are about to vote {this.state.votes}, How do you want to vote?
                        </p>
                    </div>
                    <div className="modal-footer">
                        <Button className="modal-btn-primary" 
                        type="button"
                        onClick={() => this.vote(true)}
                        >
                            Vote in favor
                        </Button>
                        <Button color="warning" 
                        type="button"
                        onClick={() => this.vote(false)}
                        >
                            Vote against
                        </Button>
                        <Button
                        className="ml-auto modal-btn-cancel"
                        color="link"
                        data-dismiss="modal"
                        type="button"
                        onClick={() => this.setState({ openModal: false })}
                        >
                        Cancel
                        </Button>
                    </div>
                </Modal>
                <Row className="justify-content-right pb-5">
                    <Col style={{textAlign: "right"}} >
                        <Button
                            className="mt-4 mr-4"
                            color="info"
                            href="#pablo"
                            onClick={this.claimTokens}
                            >
                            {this.state.unclaimedTokens - this.state.votes == 0 ? 
                            "Votes " + this.state.votes : 
                            "Claim " + this.state.unclaimedTokens - this.state.votes + " tokens"}
                        </Button>
                    </Col>
                </Row>
                <Row className="justify-content-right">
                    
                    {this.renderCards()}
                </Row>
            </Container>
            {/* <Container className="pt-lg-12">
                
                <Row className="justify-content-center">
                    <Col lg="4">
                        <Card className=" shadow border-0">
                        <CardBody className="py-5">
                            <div className="icon icon-shape">
                            <img src={require("assets/img/brand/feat1.png")}
                                style={{height: "50px", width: "60px", objectFit: "contain"}}></img>
                            </div>
                            <h6 style={{ color: "#000" }}>
                            Voting wallet
                            </h6>
                            <p className="description mt-3" >
                            {this.state.activeAcc}
                            </p>
                            <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                            >
                            Change
                            </Button>
                        </CardBody>
                        </Card>
                    </Col>
                    <Col lg="8">
                        <TablePorpouses 
                        title="Porpouses"
                        headers={['Porpouse id', 'Description', '+ Votes', '- Votes']}
                        columns={ this.state.items}
                        onEdit={this.voteModal}
                        showEdit={true}
                        showDelete={false}
                        />
                    </Col>
                </Row>
            </Container> */}
        </section>
        </main>
        </>
      );
    }
}

export default Dashboard;