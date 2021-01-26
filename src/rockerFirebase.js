import firebase from './firebase';
const rockersRef = firebase.firestore().collection('rockers');
async function getRockerList(pageSize, actualPage) {
    const data = await rockersRef.orderBy("date", 'desc').get()
        .then(querySnapshot => {
            const results = [];
            querySnapshot.forEach(doc => {
                results.push(doc.data());
            });
            return results;
        })
        .catch(error => {
            console.log("Error getting documents: ", error);
        });

    const firstItem = (pageSize * actualPage) - pageSize
    const pages = Math.ceil(data.length / pageSize)
    let rockers = {};
    rockers.results = data.slice(firstItem, firstItem + pageSize);
    rockers.options = {
        resultsLength: data.length,
        pages: pages
    }
    return rockers
}
async function createRocker(rockerData) {
    const idRocker = await rockersRef.doc().id;
    const date = firebase.firestore.FieldValue.serverTimestamp()
    await rockersRef.doc(idRocker).set({ ...rockerData, idRocker, date }).then(() => {
        console.log("Rocker successfully written!");
    })
        .catch((error) => {
            console.error("Error writing Rocker: ", error);
        });
}

async function getRockerById(rockerId) {
    const docRef = await rockersRef.doc(rockerId);
    return docRef.get().then(doc => {
        return doc.data();
    }).catch(error => {
        console.log("Error getting Rocker:", error);
    });
}

function updateRocker(rockerId, rockerData) {
    const date = firebase.firestore.FieldValue.serverTimestamp()
    rockerData = { ...rockerData, date }
    rockersRef.doc(rockerId).update(rockerData).then(() => {
        console.log("Rocker successfully updated!");
    })
        .catch(error => {
            console.error("Error updating Rocker: ", error);
        });
}

function deleteRocker(rockerId) {
    rockersRef.doc(rockerId).delete().then(() => {
        console.log("Rocker successfully deleted!");
    }).catch(error => {
        console.error("Error removing Rocker: ", error);
    });
}

const rockerFirebase = {
    rockers: {
        list(pageSize, actualPage) {
            return getRockerList(pageSize, actualPage);
        },
        create(rockerData) {
            return createRocker(rockerData);
        },
        read(rockerId) {
            return getRockerById(rockerId);
        },
        update(rockerId, rockerData) {
            updateRocker(rockerId, rockerData);
        },
        remove(rockerId) {
            deleteRocker(rockerId);
        }
    }
}
export default rockerFirebase;