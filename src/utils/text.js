
export const fuzzysearch = (needle, haystack) => {
    var hlen = haystack.length;
    var nlen = needle.length;
    if (nlen > hlen) {
        return false;
    }
    if (nlen === hlen) {
        return needle === haystack;
    }
    outer: for (var i = 0, j = 0; i < nlen; i++) {
        var nch = needle.charCodeAt(i);
        while (j < hlen) {
            if (haystack.charCodeAt(j++) === nch) {
                continue outer;
            }
        }
        return false;
    }
    return true;
}

export const makeFuzzyFilter = (searchText, searchableProperties, propertiesMapping) => {
    if (searchableProperties.length > 0 && searchText && searchText.length > 0) {
        return it => {
            for (var i = 0; i < searchableProperties.length; ++i) {
                const property = searchableProperties[i];
                const mapping = propertiesMapping && propertiesMapping[property];
                const value = mapping ? mapping[it[property]] : it[property];
                if (fuzzysearch(searchText, String(value).toLowerCase())) {
                    return true;
                }
            }

            return false;
        }
    }

    return () => true;
}

export const makeRowCompare = (property, direction, propertiesMapping) => {
    return (a, b) => {
        const mapping = propertiesMapping && propertiesMapping[property];
        const left = mapping ? mapping[a[property]] : a[property];
        const right = mapping ? mapping[b[property]] : b[property];

        if (isNaN(left) || isNaN(right)) {
            return direction * String(left).localeCompare(String(right));
        }

        return direction * (left - right);
    }
}
