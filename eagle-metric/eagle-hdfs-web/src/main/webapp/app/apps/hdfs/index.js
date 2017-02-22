/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function () {
	/**
	 * `register` is global function that for application to set up 'controller', 'service', 'directive', 'route' in Eagle
	 */
	var hdfsMetricApp = register(['ngRoute', 'ngAnimate', 'ui.router', 'eagle.service']);

	hdfsMetricApp.route("HdfsMetric", {
		url: "/hadoopService/hdfs",
		site: true,
		templateUrl: "partials/overview.html",
		controller: "overviewCtrl",
		resolve: {time: true}
	});

	hdfsMetricApp.portal({
		name: "Services", icon: "heartbeat", list: [
			{name: "HDFS", path: "hadoopService/hdfs"}
		]
	}, true);

    hdfsMetricApp.requireCSS("style/index.css");
    hdfsMetricApp.require("widget/availabilityChart.js");
	hdfsMetricApp.require("ctrl/overview.js");
})();