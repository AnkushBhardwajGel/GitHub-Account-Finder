class UI {
  constructor() {
    this.profile = document.getElementById('profile');
  }

  showProfile(user) {
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
    <div class="row">
    <div class="col-md-3 text-center">
    <img class="img-fluid mb-3 " src="${user.avatar_url}">
    <p class="badge badge-success text-center btn-block">${user.login} </p>
    <a href="${
      user.html_url
    }" target="_blank" class="btn btn-primary btn-block mb-2" > View Profile </a>
    </div>
    <div class="col-md-9">
    <span class="badge badge-primary"> Public Repos: ${
      user.public_repos
    } </span>
    <span class="badge badge-secondary"> Public Gits: ${
      user.public_gists
    } </span>
    <span class="badge badge-success"> Followers: ${user.followers} </span>
    <span class="badge badge-info mt-1"> Following: ${user.following} </span>
    <br> <br>
    <ul class="list-group">
    <li class="list-group-item">Company: ${user.company} </li>
    <li class="list-group-item">Website/Blog: ${user.blog} </li>
    <li class="list-group-item">Location: ${user.location} </li>
    <li class="list-group-item">Member Since: ${user.created_at} </li>
    </ul>
    </div>
    </div>
    </div>
    <h3 class="page-heading mb-3">Latest Repos </h3>
    <div id="repos"> </div>
    `;
  }
  // showRepos
  showRepos(repos) {
    let output = '';
    repos.forEach(repo => {
      output += `
      <div class="card card-body mb-2">
      <div class="row">
      <div class="col-md-6">
      <a href="${repo.html_url}" traget="_blank"> ${repo.name} </a>
      </div>
      <div class="col-md-6">
      <span class="badge badge-primary"> Stars: ${repo.stargazers_count} </span>
      <span class="badge badge-secondary"> Watchers: ${
        repo.watchers_count
      } </span>
      <span class="badge badge-success"> Forks: ${repo.forks} </span>
      
      </div>
      </div>
      </div>
      `;
    });
    document.getElementById('repos').innerHTML = output;
  }

  // Clear Profile
  clearProfile() {
    this.profile.innerHTML = '';
  }

  // Show Alert
  showAlert(message, className) {
    // clear any remaining alert
    this.clearAlert();
    // Create div
    const div = document.createElement('div');
    div.className = className;
    div.appendChild(document.createTextNode(message));
    // Get Parent
    const container = document.querySelector('.searchContainer');
    // Get SearchBox
    const search = document.querySelector('.search');
    // insert Alert
    container.insertBefore(div, search);
    // Timeout After 3 sec
    setTimeout(() => this.clearAlert(), 3000);
  }

  // clear Message
  clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
