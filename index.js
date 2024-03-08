// JavaScript code related to an election (pemilu)

// Define a Candidate class
class Candidate {
  constructor(name, party, agenda) {
    this.name = name;
    this.party = party;
    this.agenda = agenda;
    this.votes = 0;
  }

  campaign() {
    console.log(`${this.name} from ${this.party} is campaigning for their agenda: ${this.agenda}`);
  }

  addVote() {
    this.votes++;
    console.log(`${this.name} from ${this.party} received a vote! Total votes: ${this.votes}`);
  }
}

// Define a VotingBooth class to manage the voting process
class VotingBooth {
  constructor() {
    this.candidates = [];
  }

  addCandidate(candidate) {
    this.candidates.push(candidate);
  }

  conductElection(voterList) {
    console.log("=== Election Day ===");
    voterList.forEach((voter) => {
      const randomIndex = Math.floor(Math.random() * this.candidates.length);
      const selectedCandidate = this.candidates[randomIndex];
      selectedCandidate.addVote();
    });
    console.log("=== Election Results ===");
    this.candidates.forEach((candidate) => {
      console.log(`${candidate.name} from ${candidate.party} received ${candidate.votes} votes.`);
    });
  }
}

// Create candidate objects
const candidate1 = new Candidate("John", "Liberal Party", "Education reform");
const candidate2 = new Candidate("Jane", "Conservative Party", "Economic growth");
const candidate3 = new Candidate("Alice", "Green Party", "Environmental protection");

// Create a voting booth and add candidates
const votingBooth = new VotingBooth();
votingBooth.addCandidate(candidate1);
votingBooth.addCandidate(candidate2);
votingBooth.addCandidate(candidate3);

// Simulate a voter list
const voterList = ["Voter1", "Voter2", "Voter3", "Voter4", "Voter5", "Voter6", "Voter7", "Voter8", "Voter9", "Voter10"];

// Conduct the election
votingBooth.conductElection(voterList);
