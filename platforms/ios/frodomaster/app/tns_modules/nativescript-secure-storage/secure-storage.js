"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("tns-core-modules/utils/utils");
var SecureStorage = (function () {
    function SecureStorage(accessibilityType) {
        if (accessibilityType === void 0) { accessibilityType = kSecAttrAccessibleAlwaysThisDeviceOnly; }
        var processInfo = utils_1.ios.getter(NSProcessInfo, NSProcessInfo.processInfo);
        var isMinIOS9 = processInfo.isOperatingSystemAtLeastVersion({ majorVersion: 9, minorVersion: 0, patchVersion: 0 });
        if (isMinIOS9) {
            var simDeviceName = processInfo.environment.objectForKey("SIMULATOR_DEVICE_NAME");
            this.isSimulator = simDeviceName !== null;
        }
        else {
            var currentDevice = utils_1.ios.getter(UIDevice, UIDevice.currentDevice);
            this.isSimulator = currentDevice.name.toLowerCase().indexOf("simulator") > -1;
        }
        if (this.isSimulator) {
            console.log("Falling back to storing data in NSUserDefaults because of a Simulator bug");
        }
        this.accessibilityType = accessibilityType;
    }
    SecureStorage.prototype.get = function (arg) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.isSimulator) {
                resolve(NSUserDefaults.standardUserDefaults.objectForKey(arg.key));
                return;
            }
            var query = SAMKeychainQuery.new();
            query.service = arg.service || SecureStorage.defaultService;
            query.account = arg.key;
            try {
                query.fetch();
                resolve(query.password);
            }
            catch (e) {
                resolve(null);
            }
        });
    };
    SecureStorage.prototype.getSync = function (arg) {
        if (this.isSimulator) {
            return NSUserDefaults.standardUserDefaults.objectForKey(arg.key);
        }
        var query = SAMKeychainQuery.new();
        query.service = arg.service || SecureStorage.defaultService;
        query.account = arg.key;
        try {
            query.fetch();
            return query.password;
        }
        catch (e) {
            return null;
        }
    };
    SecureStorage.prototype.set = function (arg) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.isSimulator) {
                NSUserDefaults.standardUserDefaults.setObjectForKey(arg.value, arg.key);
                resolve(true);
                return;
            }
            SAMKeychain.setAccessibilityType(_this.accessibilityType);
            var query = SAMKeychainQuery.new();
            query.service = arg.service || SecureStorage.defaultService;
            query.account = arg.key;
            query.password = arg.value;
            resolve(query.save());
        });
    };
    SecureStorage.prototype.setSync = function (arg) {
        if (this.isSimulator) {
            NSUserDefaults.standardUserDefaults.setObjectForKey(arg.value, arg.key);
            return true;
        }
        SAMKeychain.setAccessibilityType(this.accessibilityType);
        var query = SAMKeychainQuery.new();
        query.service = arg.service || SecureStorage.defaultService;
        query.account = arg.key;
        query.password = arg.value;
        return query.save();
    };
    SecureStorage.prototype.remove = function (arg) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.isSimulator) {
                NSUserDefaults.standardUserDefaults.removeObjectForKey(arg.key);
                resolve(true);
                return;
            }
            var query = SAMKeychainQuery.new();
            query.service = arg.service || SecureStorage.defaultService;
            query.account = arg.key;
            try {
                resolve(query.deleteItem());
            }
            catch (e) {
                resolve(false);
            }
        });
    };
    SecureStorage.prototype.removeSync = function (arg) {
        if (this.isSimulator) {
            NSUserDefaults.standardUserDefaults.removeObjectForKey(arg.key);
            return true;
        }
        var query = SAMKeychainQuery.new();
        query.service = arg.service || SecureStorage.defaultService;
        query.account = arg.key;
        try {
            return query.deleteItem();
        }
        catch (e) {
            return false;
        }
    };
    SecureStorage.prototype.removeAll = function (arg) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.isSimulator) {
                var defaults = NSUserDefaults.standardUserDefaults;
                var bundleId = NSBundle.mainBundle.bundleIdentifier;
                defaults.removePersistentDomainForName(bundleId);
                resolve(true);
                return;
            }
            var allAccounts = SAMKeychain.allAccounts();
            for (var i = 0; i < allAccounts.count; i++) {
                var key = allAccounts[i].objectForKey(SecureStorage.kSSKeychainAccountKey_copy);
                try {
                    var query = SAMKeychainQuery.new();
                    query.service = arg && arg.service ? arg.service : SecureStorage.defaultService;
                    query.account = key;
                    query.deleteItem();
                }
                catch (e) {
                    console.log("SecureStorage: Could not remove key -> " + key);
                }
            }
            resolve(true);
        });
    };
    SecureStorage.prototype.removeAllSync = function (arg) {
        if (this.isSimulator) {
            var defaults = NSUserDefaults.standardUserDefaults;
            var bundleId = NSBundle.mainBundle.bundleIdentifier;
            defaults.removePersistentDomainForName(bundleId);
            return true;
        }
        var allAccounts = SAMKeychain.allAccounts();
        for (var i = 0; i < allAccounts.count; i++) {
            var key = allAccounts[i].objectForKey(SecureStorage.kSSKeychainAccountKey_copy);
            try {
                var query = SAMKeychainQuery.new();
                query.service = arg && arg.service ? arg.service : SecureStorage.defaultService;
                query.account = key;
                query.deleteItem();
            }
            catch (e) {
                console.log("SecureStorage: Could not remove key -> " + key);
            }
        }
        return true;
    };
    SecureStorage.defaultService = "my_app";
    SecureStorage.kSSKeychainAccountKey_copy = "acct";
    return SecureStorage;
}());
exports.SecureStorage = SecureStorage;
//# sourceMappingURL=secure-storage.js.map