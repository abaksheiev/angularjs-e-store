/*********************************************************************
 * Created by Anton Baksheiev on 15.12.2015.                         *
 * linkedin: https://www.linkedin.com/pub/baksheiev-anton/20/a56/b53 *
 *********************************************************************/
(function () {
    angular
        .module('eStoreApp')
        .service('session', function () {
            this.create = function (sessionId, userId, userRole, dysplayName) {
                this.id = sessionId;
                this.userId = userId;
                this.userRole = userRole;
                this.dysplayName = dysplayName;
            };
            this.destroy = function () {
                this.id = null;
                this.userId = null;
                this.userRole = null;
                this.dysplayName = null;
            };
        })
})()