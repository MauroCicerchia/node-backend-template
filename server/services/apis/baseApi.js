import Promise from "bluebird";
import axios from "axios";

export default class BaseApi {
	constructor(baseURL) {
		this.http = axios.create({
			baseURL,
		});
	}

	get(resource, qs) {
		return this._request("GET", resource, qs);
	}

	post(path = "", body = {}, query = {}) {
		return this._request("POST", path, query, body);
	}

	put(path = "", body = {}, query = {}) {
		return this._request("PUT", path, query, body);
	}

	delete(path = "", body = {}, query = {}) {
		return this._request("DELETE", path, query, body);
	}

	_request(method, url, params = {}, data = {}) {
		return Promise.resolve(
			this.http({
				method,
				url,
				params,
				data,
			})
		).get("data");
	}
}
