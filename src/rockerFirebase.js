import firebase from './firebase';
const rockersRef = firebase.firestore().collection('rockers');
async function getRockerList(pageSize, actualPage) {
    // let data = []
    const data = await rockersRef.get()
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
    await rockersRef.doc(idRocker).set({ ...rockerData, idRocker }).then(() => {
        console.log("Document successfully written!");
    })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
}

async function getRockerById(rockerId) {
    const docRef = await rockersRef.doc(rockerId);
    return docRef.get().then(doc => {
        return doc.data();
    }).catch(error => {
        console.log("Error getting document:", error);
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
            const rocker = getRockerById(rockerId);
         },
        remove(rockerId) { }
    }
}
export default rockerFirebase;