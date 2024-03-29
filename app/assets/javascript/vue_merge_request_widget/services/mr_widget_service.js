import axios from '../../lib/utils/axios_utils';

export default class MRWidgetService {
  constructor(endpoints) {
    this.endpoints = endpoints;
  }

  merge(data) {
    return axios.post(this.endpoints.mergePath, data);
  }

  approve() {
    return axios.post(this.endpoints.approvePath);
  }

  cancelAutomaticMerge() {
    return axios.post(this.endpoints.cancelAutoMergePath);
  }

  removeWIP() {
    return axios.post(this.endpoints.removeWIPPath);
  }

  removeSourceBranch() {
    return axios.delete(this.endpoints.sourceBranchPath);
  }

  fetchDeployments(targetParam) {
    return axios.get(this.endpoints.ciEnvironmentsStatusPath, {
      params: {
        environment_target: targetParam,
      },
    });
  }

  poll() {
    return axios.get(`${this.endpoints.statusPath}?serializer=basic`);
  }

  checkStatus() {
    return axios.get(`${this.endpoints.statusPath}?serializer=widget`);
  }

  fetchMergeActionsContent() {
    return axios.get(this.endpoints.mergeActionsContentPath);
  }

  rebase() {
    return axios.post(this.endpoints.rebasePath);
  }

  static stopEnvironment(url) {
    return axios.post(url);
  }

  static fetchMetrics(metricsUrl) {
    return axios.get(`${metricsUrl}.json`);
  }
}
