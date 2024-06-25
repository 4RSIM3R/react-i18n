type GoogleMapEmbedProps = {
    lat: number,
    lng: number,
}

export const GoogleMapEmbed = ({lat, lng}: GoogleMapEmbedProps) => {
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019248482699!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727dbb7b8b9de3!2sFlinders%20Street%20Railway%20Station%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1620192793594!5m2!1sen!2sus`;
    const googleMapLink = `https://www.google.com/maps/place/Candi+Jolotundo/@${lat},${lng},17z`;

    return (
        <div style={{ position: 'relative', paddingBottom: '56.25%', overflow: 'hidden', maxWidth: '100%', height: 'auto' }}>
            <iframe
                src={mapUrl}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
            ></iframe>
            <a
                href={googleMapLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}
            >
                <span style={{ display: 'none' }}>Open in Google Maps</span>
            </a>
        </div>
    );
};
